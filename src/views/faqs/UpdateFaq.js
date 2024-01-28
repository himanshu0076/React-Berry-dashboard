import * as React from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Grid, TextField, Stack, FormHelperText } from '@mui/material';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import MenuItem from '@mui/material/MenuItem';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import InputLabel from 'ui-component/extended/Form/InputLabel';

// assets

// ==============================|| CUSTOMER LIST ||============================== //

const UpdateFaq = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <MainCard
            title="Edit FAQs"
            content={false}
            secondary={
                <Button variant="contained" onClick={() => navigate(-1)}>
                    Back
                </Button>
            }
        >
            <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
                <Grid item xs={12}>
                    <TextField id="question" name="question" defaultValue="Lorem Ipsum?" fullWidth label="Question*" />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="answer" name="answer" defaultValue="Lorem Ipsum" fullWidth label="Answer*" />
                </Grid>
                <Grid item xs={12}>
                    <Stack direction="row">
                        <AnimateButton>
                            <Button variant="contained" type="submit" size="large">
                                Save
                            </Button>
                        </AnimateButton>
                    </Stack>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default UpdateFaq;
