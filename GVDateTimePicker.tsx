import {FieldProps, getIn, useFormikContext} from "formik";
import React from "react";
import {DateTimePicker} from "@mui/x-date-pickers";

export function GVDateTimePicker({field, form: {errors, touched, isSubmitting}, ...props}: FieldProps) {

    const {setFieldValue} = useFormikContext();
    return <DateTimePicker ampm={false}
                           ampmInClock={false}
                           value={field.value}
                           format={"yyyy-MM-dd HH:mm:ss"}
                           {...props}
                           slotProps={{ textField:{size:"small", sx:{width: '200px'}, helperText: getIn(errors, field.name)  }}}
                           onChange={(value) => setFieldValue(field.name, value)}
                           disabled={isSubmitting}
    />
}