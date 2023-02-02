import {fetchUtils, DataProvider, GetListResult} from 'react-admin';
import {stringify} from "query-string";


const apiUrl = 'https://actible.tk';

const httpClient = (url: string, options: RequestInit = {}): Promise<any> => {
    if (!options.headers) {
        options.headers = new Headers({Accept: 'application/json'});
    }
    const token = localStorage.getItem('token');

    // @ts-ignore
    // options.headers.set('Authorization', `Bearer ${token}`);
    // options.headers = { ...options.headers, Authorization : `Bearer ${token}` };
    options.headers = new Headers(options.headers);
    options.headers.append('Authorization', `Bearer ${token}`);

    return fetchUtils.fetchJson(url, options);
}

export const dataProvider: DataProvider = {
    getList: (resource, params) => {
        const {page, perPage} = params.pagination;
        const {field, order} = params.sort;
        const filter = params.filter
        const query = {
           //Pagination params
            page: page,
            num: perPage,
            //Filter params
            query: filter.query,
            activitiesGTE: filter.min_activities,
            activitiesLTE: filter.max_activities,
            ageGTE: filter.min_age,
            ageLTE: filter.max_age,
            reportsGTE: filter.min_complaints,
            reportsLTE: filter.max_complaints,
            gender: filter.gender,
            createdAfter: filter.createdAfter
                ? new Date(filter.createdAfter).getTime()
                : undefined,
            createdBefore: filter.createdBefore
                ? new Date(filter.createdBefore).getTime()
                : undefined,
            userId: filter.userId,
            location: filter.location,
            activity: filter.id,
            //Sort params
            sortColumn: field.toUpperCase(),
            sortOrder: order,
        };

        switch (field) {
            case "location.firstTitle":
                query.sortColumn = "LOCATION";
                break;
            case "reportCount":
                query.sortColumn = "REPORTS";
                break;
        }

        switch (filter.status) {
            case 'userReports':
                resource = "admin/user/report/list"
                break;
            case 'activityReports':
                resource = "admin/activity/report/list"
                break;
            case 'commentReports':
                resource = "admin/activity/comment/report/list"
                break;
        }

        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({headers, json}) => {
            localStorage.setItem('data', JSON.stringify(json));

            json = json.map((item:object) => {
                if (item.hasOwnProperty('id')) {
                    return item;
                } else {
                    return { ...item, id: Math.random() };
                }
            });

            return {
                data: json,
                total: parseInt(headers.get('content-range').split('/').pop(), 10),
            };
        });

    },
    getOne: (resource, params) => {
        const id = params.id;
        const query = {
            page: 1
        }
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({json}) => {
            const data = localStorage.getItem('data');
            if (!data) {
                return {
                    data: null
                };
            }
            return {
                data: JSON.parse(data).find((item: any) => item.id === parseInt(id)),
            };
        });
    },
    getMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({id: params.ids}),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({json}) => ({
            data: json,
        }));
    },
    getManyReference: (resource, params) => {
        const {page, perPage} = params.pagination;
        const {field, order} = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({headers, json}) => ({
            data: json,
            total: parseInt(headers.get('content-range').split('/').pop(), 10),
        }));
    },

    update: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({json}) => ({data: json})),

    updateMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({id: params.ids}),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({json}) => ({data: json}));
    },

    create: (resource, params) =>
        httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({json}) => ({
            data: {...params.data, id: json.id},
        })),

    delete: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({json}) => ({data: json})),

    deleteMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({id: params.ids}),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'DELETE',
        }).then(({json}) => ({data: json}));
    }

};

