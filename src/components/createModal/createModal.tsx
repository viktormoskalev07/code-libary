import React, {FC, useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useForm} from "react-hook-form";
import {TextField, Button, CircularProgress} from "@mui/material";
import {IData} from "components/types";
import {create, API, TApiType} from "api";
import {useOpen} from "hooks/useOpen";
import {useSWRConfig} from "swr";
import {SelectType} from "components/createModal/select/select";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2  ,
};


type TModal={
  handleClose:(  )=> void;
  open:boolean;
}
const defaults:IData = {
  title:"",
  description:"",
  link:""
}

export  const CreateModal:FC<TModal>= ({handleClose  , open} ) =>{
  const [type , setType] = useState<TApiType>("code");
  const { register, handleSubmit,    formState: { errors } , reset } = useForm();
  const {isOpen:isSubmitting ,onOpen: onSubmitting,onClose:onFinishSubmit }=useOpen();
  const { mutate } = useSWRConfig()
  const onSubmit =( data:any )=> {
    onSubmitting();
    create(data , type).then(()=>{
      onFinishSubmit();
      mutate(API.get);
      handleClose();

    }).catch((error)=>{
      onFinishSubmit();
      console.log(error)
    })

  }

  const resetAll =()=>{
    reset(defaults);
  }
  const titleError= errors.hasOwnProperty("title");
  const descriptionError= errors.hasOwnProperty("description");
  const linkError= errors.hasOwnProperty("link");

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-create"
      >
        <Box sx={style}>
          <Typography sx={{marginBottom:2}}  variant="h6" component="h2">
            create new item
          </Typography>
          <SelectType setState={setType} state={type}/>
          <form onSubmit={handleSubmit(onSubmit)}>
        <Box   sx={{display:"grid"   , gap:2 , marginBottom:2}}>
        <TextField
          fullWidth
          {...register("title", { required: true })}
          error={titleError}
          label="Title"
          placeholder="type title"
          helperText={titleError?"title is required":""}
          variant="filled"
        />
        <TextField
          fullWidth
          {...register("description", { maxLength: 300 })}
          error={descriptionError}
          label="description"
          placeholder="type description"
          multiline
          rows={2}

          helperText={descriptionError?"maxLength is 400":""}
          variant="filled"
        />
        <TextField
          fullWidth
          {...register("link", { required: true })}
          error={linkError}
          label="link"
          placeholder="https://example.com"
          helperText={linkError?"link is required":""}
          variant="filled"
        />
        </Box>
             <Box sx={{display:"grid" , gridTemplateColumns:"1fr 1fr" , gap:2}}>
               <Button onClick={()=>{resetAll() ; handleClose()}} color={"error"} type={"button"} variant={"outlined"}> Cancel </Button>
               <Button  type={"submit"} variant={"contained"}>   {isSubmitting? <CircularProgress  color={"warning"} /> :"Create"}  </Button>
               <Button  onClick={resetAll} type={"submit"} variant={"contained"} color={"error"}>   reset </Button>
             </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

