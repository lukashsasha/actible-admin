// import React, { useState } from 'react';
// import { useInput } from 'react-admin';
// import { Slider } from '@mui/material';
//
// interface Props {
//     label: string;
// }
//
// const RangeInput: React.FC<Props> = ({ label }) => {
//     const { field } = useInput({ source: label });
//     const [minValue, setMinValue] = useState(0);
//     const [maxValue, setMaxValue] = useState(100);
//
//     const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setMinValue(Number(event.target.value));
//         field.onChange([minValue, maxValue]);
//     }
//
//     const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setMaxValue(Number(event.target.value));
//         field.onChange([minValue, maxValue]);
//     }
//
//     const handleSliderChange = (event: any, ) => {
//         console.log(event)
//         // setMinValue(newValues[0]);
//         // setMaxValue(newValues[1]);
//         // field.onChange(newValues);
//     }
//
//     return (
//         <div>
//             <span>{label}</span>
//             <div>
//                 <input
//                     type="number"
//                     value={minValue}
//                     onChange={handleMinChange}
//                 />
//                 <input
//                     type="number"
//                     value={maxValue}
//                     onChange={handleMaxChange}
//                 />
//             </div>
//             <Slider
//                 value={[minValue, maxValue]}
//                 onChange={handleSliderChange}
//                 valueLabelDisplay="auto"
//                 aria-labelledby="range-slider"
//                 min={0}
//                 max={100}
//             />
//         </div>
//     );
// };
//
// export default RangeInput;

import * as React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import ActionHide from '@mui/icons-material/HighlightOff';
import clsx from 'clsx';
import { useResourceContext, useTranslate } from 'ra-core';

export const RangeInput = (props:any) => {
    const { filterElement, handleHide, className } = props;
    const resource = useResourceContext(props);
    const translate = useTranslate();

    return (
        <Root
            data-source={filterElement.props.source}
            className={clsx('filter-field', className)}
        >
            {!filterElement.props.alwaysOn && (
                <IconButton
                    className={clsx(
                        'hide-filter',
                        FilterFormInputClasses.hideButton
                    )}
                    onClick={handleHide}
                    data-key={filterElement.props.source}
                    title={translate('ra.action.remove_filter')}
                    size="small"
                >
                    <ActionHide />
                </IconButton>
            )}
            {React.cloneElement(filterElement, {
                resource,
                record: emptyRecord,
                size: 'small',
                helperText: false,
                // ignore defaultValue in Field because it was already set in Form (via mergedInitialValuesWithDefaultValues)
                defaultValue: undefined,
            })}
            <div className={FilterFormInputClasses.spacer}>&nbsp;</div>
        </Root>
    );
};

RangeInput.propTypes = {
    filterElement: PropTypes.node,
    handleHide: PropTypes.func,
    resource: PropTypes.string,
    className: PropTypes.string,
};

const PREFIX = 'RaFilterFormInput';

export const FilterFormInputClasses = {
    spacer: `${PREFIX}-spacer`,
    hideButton: `${PREFIX}-hideButton`,
};

const Root = styled('div', {
    name: PREFIX,
    overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-end',
    pointerEvents: 'auto',

    [`& .${FilterFormInputClasses.spacer}`]: { width: theme.spacing(2) },
    [`& .${FilterFormInputClasses.hideButton}`]: {
        marginBottom: theme.spacing(1),
    },
}));

const emptyRecord = {};

