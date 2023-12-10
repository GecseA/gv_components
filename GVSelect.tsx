import {getIn} from "formik";
import {TextField} from "@mui/material";
import {TextFieldProps} from "formik-mui";

export function GVSelect({field, form: {errors, touched, isSubmitting}, ...props}: TextFieldProps) {

    let errorMessage : any = undefined
    if (getIn(touched, field.name) === true) {
        errorMessage = getIn(errors, field.name)
    }
    return (
        <TextField style={{minWidth:"200px", maxWidth: "300px", margin: "5px"}}
                {...field}
                {...props}
                size={"small"}
                select
                helperText={errorMessage}
                error={!!errorMessage}
                disabled={isSubmitting || props.disabled}
        >
        </TextField>
        )
}
