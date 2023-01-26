import React from 'react'
import styled from 'styled-components'
import {ReactComponent as PlusIcons} from "../../../assets/icons/plus-icons.svg"
import Button from '../../UI/Button'


const MealItemForm = ({id}) => {
  return (
    <StyledForm>
       <Contaiber>
       <label htmlFor={id}>Amount</label>
       <input type="number" id={id} min={1} max={5} defaultValue={1}/>
       </Contaiber>
            <Button>
            <StyledIcon/>Add
            </Button>
    </StyledForm>
  )
}

export default MealItemForm;

const StyledIcon = styled(PlusIcons)`
    margin-right: 10px;
`
const Contaiber = styled.div`
    margin-bottom: 12px;
    label {
        line-height: 27px;
        font-weight: 600;
        font-size: 18px;
        color: #222222;
    }
    input {
        border-radius: 6px;
        width: 60px;
        height: 32px;
       outline: none;
       border: 1px solid #d6d6d6;
       padding: 4px 12px;
       line-height: 24px;
       font-weight: 600;
       font-size: 16px;
    }
    display: flex;
    align-items: center;
    
`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  
`
