import { RichTextEditor } from '@mantine/rte';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Input from '../../../../components/input';
import Paper from '../../../../components/Paper';

const ManageBlogAddContent = () => {
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Title is required'),
            description: Yup.string().required(
                'Description is required',
            ),
        }),
    });

    return (
        <Paper>
            <form className="p-8">
                <div className="flex flex-row w-full my-3">
                    <Input
                        className="w-full"
                        name="title"
                        label="Title"
                        outline
                        error={
                            formik.touched.title &&
                            formik.errors.title
                        }
                        {...formik.getFieldProps('title')}
                    />
                </div>
                <div className="flex flex-col w-full my-3">
                    <h1>Content</h1>
                    <RichTextEditor
                        stickyOffset={20}
                        {...formik.getFieldProps('description')}
                    />
                </div>
            </form>
        </Paper>
    );
};

export default ManageBlogAddContent;
