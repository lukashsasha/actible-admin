import {TranslationMessages} from 'react-admin';
import russianMessages from 'ra-language-russian';

const customRussianMessages: TranslationMessages = {
   ra: {
      action: {
         add_filter: "Добавить фильтр",
         add: "Добавить",
         back: "Назад",
         bulk_actions: "1 выбран |||| %{smart_count} выбрано |||| %{smart_count} выбрано",
         cancel: "Отмена",
         clear_array_input: 'Clear the list',
         clear_input_value: "Очистить",
         clone: "Дублировать",
         confirm: "Подтвердить",
         create: "Создать",
         create_item: 'Create %{item}',
         delete: "Удалить",
         edit: "Редактировать",
         export: "Экспорт",
         list: "Список",
         refresh: "Обновить",
         remove_filter: "Убрать фильтр",
         remove_all_filters: 'Remove all filters',
         remove: "Удалить",
         save: "Сохранить",
         search: "Поиск",
         select_all: 'Select all',
         select_row: 'Select this row',
         show: "Просмотр",
         sort: "Сортировка",
         undo: "Отменить",
         unselect: "Не выбрано",
         expand: "Раскрыть",
         close: "Закрыть",
         open_menu: "Открыть меню",
         close_menu: "Закрыть меню",
         update: 'Update',
         move_up: 'Move up',
         move_down: 'Move down',
         open: 'Open',
         toggle_theme: 'Toggle Theme',
         select_columns: 'Columns',
      },
      boolean: {
         true: "Да",
         false: "Нет",
         null: ""
      },
      page: {
         create: "Создать %{name}",
         dashboard: "Главная",
         edit: "%{name} #%{id}",
         error: "Что-то пошло не так",
         list: "%{name}",
         loading: "Загрузка",
         not_found: "Не найдено",
         show: "%{name} #%{id}",
         empty: "Нет %{name}.",
         invite: "Вы хотите добавить еще одну?",
      },
      input: {
         file: {
            upload_several: "Перетащите файлы сюда или нажмите для выбора.",
            upload_single: "Перетащите файл сюда или нажмите для выбора."
         },
         image: {
            upload_several: "Перетащите изображения сюда или нажмите для выбора.",
            upload_single: "Перетащите изображение сюда или нажмите для выбора."
         },
         references: {
            all_missing: "Связанных данных не найдено",
            many_missing:
                "Некоторые из связанных данных не доступны",
            single_missing:
                "Связанный объект не доступен"
         },
         password: {
            toggle_visible: 'Скрыть пароль',
            toggle_hidden: 'Показать пароль',
         },
      },
      message: {
         about: "Справка",
         are_you_sure: "Вы уверены?",
         auth_error:
             'A error occurred while validating the authentication token.',
         bulk_delete_content:
             "Вы уверены, что хотите удалить %{name}? |||| Вы уверены, что хотите удалить объекты, кол-вом %{smart_count} ? |||| Вы уверены, что хотите удалить объекты, кол-вом %{smart_count} ?",
         bulk_delete_title: "Удалить %{name} |||| Удалить %{smart_count} %{name} |||| Удалить %{smart_count} %{name}",
         bulk_update_content:
             'Are you sure you want to update this %{name}? |||| Are you sure you want to update these %{smart_count} items?',
         bulk_update_title:
             'Update %{name} |||| Update %{smart_count} %{name}',
         clear_array_input: 'Are you sure you want to clear the whole list?',
         delete_content: "Вы уверены что хотите удалить этот объект",
         delete_title: "Удалить %{name} #%{id}",
         details: "Описание",
         error: "В процессе запроса возникла ошибка, и он не может быть завершен",
         invalid_form: "Форма заполнена неверно, проверьте, пожалуйста, ошибки",
         loading: "Идет загрузка, пожалуйста, подождите...",
         no: "Нет",
         not_found: "Ошибка URL или вы следуете по неверной ссылке",
         yes: "Да",
         unsaved_changes:
             "Некоторые из ваших изменений не были сохранены. Вы уверены, что хотите их игнорировать?",
      },
      navigation: {
         no_results: "Результатов не найдено",
         no_more_results:
             "Страница %{page} выходит за пределы нумерации, попробуйте предыдущую",
         page_out_of_boundaries: "Страница %{page} вне границ",
         page_out_from_end: "Невозможно переместиться дальше последней страницы",
         page_out_from_begin: "Номер страницы не может быть меньше 1",
         page_range_info: "%{offsetBegin}-%{offsetEnd} из %{total}",
         page_rows_per_page: "Строк на странице:",
         partial_page_range_info:
             '%{offsetBegin}-%{offsetEnd} of more than %{offsetEnd}',
         current_page: 'Page %{page}',
         page: 'Go to page %{page}',
         first: 'Go to first page',
         last: 'Go to last page',
         previous: 'Go to previous page',
         next: "Следующая",
         prev: "Предыдущая",
         skip_nav: "Перейти к содержанию"
      },
      sort: {
         sort_by: 'Сортировать по %{field} %{order}',
         ASC: 'возрастанию',
         DESC: 'убыванию',
      },
      auth: {
         auth_check_error: "Пожалуйста, авторизуйтесь для продолжения работы",
         user_menu: "Профиль",
         username: "Имя пользователя",
         password: "Пароль",
         sign_in: "Войти",
         sign_in_error: "Ошибка аутентификации, попробуйте снова",
         logout: "Выйти"
      },
      notification: {
         updated: "Элемент обновлен |||| %{smart_count} обновлено |||| %{smart_count} обновлено",
         created: "Элемент создан",
         deleted: "Элемент удален |||| %{smart_count} удалено |||| %{smart_count} удалено",
         bad_item: "Элемент не валиден",
         item_doesnt_exist: "Элемент не существует",
         http_error: "Ошибка сервера",
         data_provider_error: "Ошибка dataProvider, проверьте консоль",
         i18n_error: "Не удалось загрузить перевод для указанного языка",
         canceled: "Операция отменена",
         logged_out: "Ваша сессия завершена, попробуйте переподключиться/войти снова",
         not_authorized: "You're not authorized to access this resource.",
      },
      validation: {
         required: "Обязательно для заполнения",
         minLength: "Минимальное кол-во символов %{min}",
         maxLength: "Максимальное кол-во символов %{max}",
         minValue: "Минимальное значение %{min}",
         maxValue: "Значение может быть %{max} или меньше",
         number: "Должно быть цифрой",
         email: "Некорректный email",
         oneOf: "Должно быть одним из: %{options}",
         regex: "Должно быть в формате (regexp): %{pattern}"
      },
      saved_queries: {
         label: 'Saved queries',
         query_name: 'Query name',
         new_label: 'Save current query...',
         new_dialog_title: 'Save current query as',
         remove_label: 'Remove saved query',
         remove_label_with_name: 'Remove query "%{name}"',
         remove_dialog_title: 'Remove saved query?',
         remove_message:
             'Are you sure you want to remove that item from your list of saved queries?',
         help: 'Filter the list and save this query for later',
      },
      configurable: {
         customize: 'Customize',
         configureMode: 'Configure this page',
         inspector: {
            title: 'Inspector',
            content: 'Hover the application UI elements to configure them',
            reset: 'Reset Settings',
            hideAll: 'Hide All',
            showAll: 'Show All',
         },
         Datagrid: {
            title: 'Datagrid',
            unlabeled: 'Unlabeled column #%{column}',
         },
         SimpleForm: {
            title: 'Form',
            unlabeled: 'Unlabeled input #%{input}',
         },
         SimpleList: {
            title: 'List',
            primaryText: 'Primary text',
            secondaryText: 'Secondary text',
            tertiaryText: 'Tertiary text',
         },
      },
   }
};

export default customRussianMessages;
