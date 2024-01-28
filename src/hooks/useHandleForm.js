import { useMemo } from 'react';
import { put, post, patch } from 'utils/axiosRequests';
import { globalAction, dispatch } from 'store';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
// ==============================|| CONFIG - LOCAL STORAGE ||============================== //

export default function useHandleForm(url, pageBehaviour = 'Add', formikInitialValues, validationSchema, changeFormSubmitValue = null) {
    const { currentPage, recordPerPage, searchStr, currentData } = useSelector((state) => state.listing);

    const formik = useFormik({
        initialValues: formikInitialValues,
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            if (changeFormSubmitValue !== null) values = changeFormSubmitValue(values);
            if (pageBehaviour === 'Add') {
                addData(values, resetForm);
            } else {
                updateData(values);
            }
        }
    });

    useMemo(() => {
        console.log(currentData);
        if (currentData && pageBehaviour !== 'Add') {
            Object.keys(formikInitialValues).forEach((key) => {
                console.log(key, currentData.key);
                formik.setFieldValue(key, currentData[key]);
            });
        }
    }, [currentData]);

    function addData(value, resetForm) {
        post(url, value)
            .then((res) => {
                if (res?.type === 'validationError') {
                    res.errors.forEach((error) => {
                        formik.setFieldError(error.param, error.msg);
                    });
                } else {
                    resetForm();
                }
            })
            .catch((err) => {
                if (err?.type === 'validationError') {
                    err.errors.forEach((error) => {
                        console.log(error);
                        formik.setFieldError(error.param, error.msg);
                    });
                }
            });
    }

    function updateData(value) {
        put(`${url}/${currentData.id}`, value)
            .then((res) => {
                if (res?.type === 'validationError') {
                    res.errors.forEach((error) => {
                        formik.setFieldError(error.param, error.msg);
                    });
                }
            })
            .catch((err) => {
                if (err?.type === 'validationError') {
                    err.errors.forEach((error) => {
                        console.log(error);
                        formik.setFieldError(error.param, error.msg);
                    });
                }
            });
    }

    return [formik, currentPage, searchStr, recordPerPage];
}
