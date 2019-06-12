import React, {Component} from "react";
import {Button} from "antd";

function creaetIdGenerator() {
    let id = 1000;
    return function () {
        return ++id;
    }
}

const idGen = creaetIdGenerator();


export class EmployeeDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employees: [{
                id: idGen(),
                name: '张三',
                birthday: '1990-01-01',
                salary: 2000
            },{
                id: idGen(),
                name: '李四',
                birthday: '1995-01-01',
                salary: 1000
            },{
                id: idGen(),
                name: '王五',
                birthday: '1980-01-01',
                salary: 3000
            }]
        }

    }

    deleteEmployee(item) {
        console.log(item);

        if (window.confirm(`您要真的要删除 ${item.name} 吗?`)) {
            const employees = this.state.employees;
            let position = employees.indexOf(item);

            if (position !== -1) {
                employees.splice(position, 1);
                this.setState({
                    employees
                })
            }
        }
    }

    addEmployee(item) {
        const employees = this.state.employees;
        employees.push(item);

        this.setState({
            employees
        });

    }

    render () {
        return (
            <div>
                员工管理
                <DataTable items={this.state.employees} deleteCallback={this.deleteEmployee.bind(this)} addCallback={this.addEmployee.bind(this)}  />

            </div>
        )
    }
}


class DataTable extends Component {
    constructor(props) {
        super(props);

        this.uname = React.createRef();
        this.usalary = React.createRef();
        this.ubirthday = React.createRef();


    }

    deleteItem(item) {
        console.log(item);
    }

    addItem() {
        console.log(this.uname.current.value, this.usalary.current.value, this.ubirthday.current.value);

        const { addCallback } = this.props;

        let item = {
            id: idGen(),
            name: this.uname.current.value,
            birthday: this.ubirthday.current.value,
            salary: Number(this.usalary.current.value)
        };

        this.uname.current.value = '';
        this.ubirthday.current.value = '';
        this.usalary.current.value = '';

        addCallback(item);

    }

    render() {

        const { items, deleteCallback, } = this.props;

        const totalSalary = items.reduce((previous, item) => {
            return previous + item.salary;
        }, 0);

        const employeeEls = items.map((item, index) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.birthday}</td>
                    <td>{item.salary}</td>
                    <td>
                        <Button onClick={(e) => {deleteCallback(item)}}>删除</Button>
                    </td>
                </tr>
            )
        });

        return (
            <div>
                <h1>员工管理</h1>
                <table border="1" width="100%">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>姓名</th>
                        <th>生日</th>
                        <th>薪水</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    {employeeEls}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colSpan={3} align="right">合计:</td>
                        <td>{totalSalary}</td>
                        <td></td>
                    </tr>
                    </tfoot>
                </table>


                <hr/>

                <h2>新增员工</h2>

                <ul style={{listStyle: 'none'}}>
                    <li>
                        <label>
                            姓名: <input ref={this.uname} type="text"/>
                        </label>
                    </li>
                    <li>
                        <label>
                            生日: <input ref={this.ubirthday} type="date"/>
                        </label>
                    </li>
                    <li>
                        <label>
                            工资: <input ref={this.usalary} type="number"/>
                        </label>
                    </li>
                </ul>

                <Button onClick={this.addItem.bind(this)}>创建</Button>
            </div>
        );
    }
}
