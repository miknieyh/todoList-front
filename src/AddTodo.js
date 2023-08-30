import React from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item : {title:""}}; // 사용자의 입력을 저장할 오브젝트
        this.add = props.add; //props함수를 this.add에 연결
    }
    //함수 작성
    onInputChange = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({item:thisItem});
        console.log(thisItem);
    }
    //함수 작성
    onButtonClick = () => {
        this.add(this.state.item); //add 함수 사용
        this.setState({item:{title:""}}); //초기화
    }

    enterKeyEventHandler = (e) => {
        if(e.key === 'Enter') {
            this.onButtonClick();
        }
    }

    render() {
        return (
            <Paper style={{margin:16,padding:16}}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{paddingRight:16}}>
                        <TextField onChange={this.onInputChange}
                                   onKeyDown={this.enterKeyEventHandler}
                                   placeholder="Add Todo here" fullWidth/>
                    </Grid>
                    <Grid xs={1} md={1} item>
                        <Button onClick={this.onButtonClick} fullWidth color="secondary" variant="outlined">
                            +
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default AddTodo;
