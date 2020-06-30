import React from 'react';
import { Link } from 'react-router-dom'
import 'react-chat-elements/dist/main.css';
import { ChatList, MessageList, Input, Button, Navbar, Avatar } from 'react-chat-elements'
import Hashids from 'hashids'
var hashids = new Hashids("this is my salt", 15, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");

class Bidding extends React.Component {
    state = {
        show: true,
        user_List: [
            {
                id: "1",
                status: "online",
                title: "Josephin Doe",
                avatar: './files/assets/images/avatar-4.jpg',
                alt: 'Reactjs',
                subtitle: 'What are you doing?',
                date: new Date(),
                unread: 0,
            },
            {
                id: "2",
                status: "offline",
                title: "Lary Doe",
                avatar: './files/assets/images/avatar-4.jpg',
                alt: 'Reactjs',

                subtitle: 'What are you doing?',
                date: new Date(),
                unread: " 5 KWD",
            }, {
                id: "3",
                status: "offline",
                title: "Alice",
                avatar: './files/assets/images/avatar-4.jpg',
                alt: 'Reactjs',

                subtitle: 'What are you doing?',
                date: new Date(),
                unread: 2,
            }, {
                id: "4",
                status: "online",
                title: "Alia",
                avatar: './files/assets/images/avatar-4.jpg',
                alt: 'Reactjs',

                subtitle: 'What are you doing?',
                date: new Date(),
                unread: 0,
            }, {
                id: "5",
                status: "online",
                title: "Suzen",
                avatar: './files/assets/images/avatar-4.jpg',
                alt: 'Reactjs',

                subtitle: 'What are you doing?',
                date: new Date(),
                unread: 0,
            }, {
                id: "6",
                status: "offline",
                title: "Michael Scofield",
                avatar: './files/assets/images/avatar-4.jpg',
                alt: 'Reactjs',

                subtitle: 'What are you doing?',
                date: new Date(),
                unread: 0,
            }, {
                id: "7",
                status: "online",
                title: "Irina Shayk",
                avatar: './files/assets/images/avatar-4.jpg',
                alt: 'Reactjs',

                subtitle: 'What are you doing?',
                date: new Date(),
                unread: 0,
            }, {
                id: "8",
                status: "online",
                title: "Sara Tancredi",
                avatar: './files/assets/images/avatar-4.jpg',
                alt: 'Reactjs',

                subtitle: 'What are you doing?',
                date: new Date(),
                unread: 0,
            }, {
                id: "9",
                status: "offline",
                title: "Lary",
                avatar: './files/assets/images/avatar-4.jpg',
                alt: 'Reactjs',

                subtitle: 'What are you doing?',
                date: new Date(),
                unread: 0,
            },
        ],
        chat_list: [
            {
                position: 'right',
                type: 'text',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                date: new Date(),
            }, {
                position: 'left',
                type: 'text',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                date: new Date(),
            }, {
                position: 'right',
                type: 'text',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                date: new Date(),
            }, {
                position: 'right',
                type: 'text',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                date: new Date(),
            }, {
                position: 'left',
                type: 'text',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                date: new Date(),
            }, {
                position: 'right',
                type: 'text',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                date: new Date(),
            }, {
                position: 'left',
                type: 'text',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                date: new Date(),
            }, {
                position: 'right',
                type: 'text',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                date: new Date(),
            }
        ],

    }
    goBackPage = (e) => {
        e.preventDefault();
        this.props.history.goBack()
    }
    render() {
        return (
            <div class="pcoded-content">
                <div class="pcoded-inner-content">
                    <div class="main-body ">
                        <div class="page-wrapper">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Chat</h5>
                                    <button
                                        onClick={this.goBackPage}
                                        className="btn btn-outline-secondary btn-sm d-inline-block f-right" >
                                        <i class="icofont icofont-rounded-double-left"></i> Back
                                        </button>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4 chat-box-main">
                                        <ChatList
                                            className='chat-list'
                                            dataSource={this.state.user_List} />
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="chat-box-main ">
                                            <MessageList
                                                className='message-list'
                                                lockable={true}
                                                toBottomHeight={'100%'}
                                                dataSource={this.state.chat_list}
                                            />
                                        </div>
                                        <Input
                                            placeholder="Type here..."
                                            multiline={true}
                                            className="border border-info rce-container-input"
                                            rightButtons={
                                                <Button
                                                    color='white'
                                                    backgroundColor='black'
                                                    text='Send' />
                                            } />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        );
    }
}

export default Bidding;
