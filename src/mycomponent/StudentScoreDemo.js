import React, {Component} from "react";
import { Button } from "antd";

function createGenIdFunction() {
    let initId = 1000;

    return function () {
        return ++initId;
    }
}

const genId = createGenIdFunction();


export class StudentScoreDemo extends Component{

    constructor(props) {
        super(props);

        this.state = {
            students: [
                {id: genId(), name: '张三', birthday: '1990-01--05', score: 500},
                {id: genId(), name: '李四', birthday: '1992-05--03', score: 610},
                {id: genId(), name: '王五', birthday: '1993-01--01', score: 300},
                {id: genId(), name: '赵六', birthday: '1995-07--08', score: 450},
            ]
        };

        this.stuName = React.createRef();
        this.stuBirthday = React.createRef();
        this.stuScore = React.createRef();
    }

    deleteItem(item) {
        let students = this.state.students;
        let position = students.indexOf(item);
        students.splice(position, 1);

        this.setState({
            students: students
        })
    }

    createStudent() {

        if (this.stuName.current.value && this.stuBirthday.current.value && this.stuScore.current.value) {
            const students = this.state.students;
            students.push({
                id: genId(),
                name: this.stuName.current.value,
                birthday: this.stuBirthday.current.value,
                score: Number(this.stuScore.current.value)
            });

            this.stuName.current.value = '';
            this.stuBirthday.current.value = '';
            this.stuScore.current.value = '';

            this.setState({
                students
            })
        } else {
            alert('学生信息未填写完整')
        }
    }

    render() {
        return (
            <div>
                <h1>学生成绩表</h1>
                <DataTable items={this.state.students} onDelete={this.deleteItem.bind(this)} />
                <hr/>

                <fieldset>
                    <legend>新增学生</legend>

                    <ul style={{listStyle: 'none'}}>
                        <li>
                            <label>
                                姓名: <input ref={this.stuName} type="text" />
                            </label>
                        </li>
                        <li>
                            <label>
                                生日: <input ref={this.stuBirthday} type="date" />
                            </label>
                        </li>
                        <li>
                            <label>
                                成绩: <input ref={this.stuScore} type="number" />
                            </label>
                        </li>
                    </ul>
                    <Button onClick={this.createStudent.bind(this)}>
                        创建
                    </Button>
                </fieldset>

            </div>
        );
    }
}




class DataTable extends Component {

    deleteItem(item) {
        const { onDelete } = this.props;
        if (window.confirm(`您确认要删除 ${item.name} 同学吗?` )) {
            onDelete(item);
        }
    }

    render() {
        const { items } = this.props;

        const total = items.reduce((previousScore, currentItem) => {
            return previousScore + currentItem.score;
        }, 0);

        const itemEls = items.map((item, index) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.birthday}</td>
                    <td>{item.score}</td>
                    <td>
                        <Button onClick={this.deleteItem.bind(this, item)}>
                            删除
                        </Button>
                    </td>
                </tr>
            )
        });

        return <div>
            <table width="100%" border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>姓名</th>
                        <th>出生日期</th>
                        <th>分数</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {itemEls}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3} align="right">合计: </td>
                        <td>{total}</td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    }
}
