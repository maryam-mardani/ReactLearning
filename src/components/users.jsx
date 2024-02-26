import React, { Component } from 'react';
import axios from 'axios';
import LoadingUsers from './loading/loadingUsers';
import { Link } from 'react-router-dom';

class Users extends Component {
    state = {
        users: [],
        isLoading: true
    }

    async componentDidMount() {
        const response = await axios.get('https://reqres.in/api/users');
        setTimeout(() => {
            this.setState({ users: response.data.data, isLoading: false })
        },2000);
    }

    render() {
        return (
            <>
                <button className='btn btn-lg btn-primary' onClick={this.handleCreate}>Create</button>
                <div className='row'>
                    {
                        this.state.isLoading ? (<LoadingUsers />) : (this.getUsers())
                    }
                </div>
            </>
        );
    }

    getUsers = () => {

        return this.state.users.map((user) => {
                return (
                    <div className='col-4 text-center p-5'>
                        <img src={user.avatar} alt="" style={{ borderRadius: '50%', width: '100px' }} />
                        <Link to={`/user/${user.id}`}>
                            <h4>{user.first_name} {user.last_name}</h4>
                        </Link>
                        <h5>{user.email}</h5>
                        <div className="row">
                            <div className="col-6"><button onClick={() => {this.handleUpdate(user)}} className='btn btn-info btn-sm'>Update</button></div>
                            <div className="col-6"><button onClick={() => {this.handleDelete(user)}} className='btn btn-danger btn-sm'>Remove</button></div>
                        </div>
                    </div>
                )
            })
    }

    handleCreate = async () => {
        const newUser = {
            first_name: "Mary",
            last_name: "Mardani",
            email: "test@test.com",
            avatar: "https://reqres.in/img/faces/1-image.jpg",
        };

        await axios.post('https://reqres.in/api/users',newUser);
        this.setState({users: [...this.state.users,newUser]})
    }

    handleUpdate = async (user) => {
        user.first_name = "new name";
        await axios.put(`https://reqres.in/api/users/${user.id}`,user);
        const updatedUsers = [...this.state.users];
        const index = updatedUsers.indexOf(user);
        updatedUsers[index] = {...user};
        this.setState({users: updatedUsers})
    }

    handleDelete = async (user) => {
        await axios.delete(`https://reqres.in/api/users/${user.id}`);
        const newUsers = this.state.users.filter(u => u.id !== user.id);
        this.setState({users: newUsers})
    }
}

export default Users;