import React, { useEffect, useRef, useState } from 'react';
import client, { COLLECTION_ID, DATABASE_ID, databases } from '../constant';
import { ID, Query, Role, Permission } from 'appwrite';
import { Trash2 } from 'react-feather';
import Header from '../components/Header';
import { useAuth } from '../utiles/AuthContext';

export default function Room() {
    const { user } = useAuth();

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const messageBody = useRef();

    useEffect(() => {
        getMessage();
    }, []);

    useEffect(() => {
        const unsubscribe = client.subscribe(
            `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`,
            (res) => {
                // console.log('realtime:', res);
                if (res.events.includes('databases.*.collections.*.documents.*.create')) {
                    console.log('created Message');
                    setMessages((prev) => [res.payload, ...prev]);
                }
                if (res.events.includes('databases.*.collections.*.documents.*.delete')) {
                    console.log('deleted Message!!!');
                    setMessages((prev) =>
                        messages.filter((item) => item?.$id !== res.payload?.$id)
                    );
                }
            }
        );
        return () => unsubscribe();
    }, [messages]);

    const getMessage = async () => {
        const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.orderDesc('$createdAt'),
            Query.limit(20),
        ]);
        setMessages(response?.documents);
    };

    // Add message to database
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setLoading(true);
        let payload = {
            user_id: user?.$id,
            username: user?.name,
            body: messageBody.current.value,
        };

        let permissions = [Permission.write(Role.user(user?.$id))];

        await databases.createDocument(
            DATABASE_ID,
            COLLECTION_ID,
            ID.unique(),
            payload,
            permissions
        );
        messageBody.current.value = '';
        setLoading(false);
    };

    // delete message from database
    const deleteMessage = async (id) => {
        setLoading(true);
        await databases
            .deleteDocument(DATABASE_ID, COLLECTION_ID, id)
            .then(() => setLoading(false));
    };

    return (
        <div className='container'>
            {/* Header Section to Display User */}
            <Header />
            <div className='room--container'>
                <form id='message--form' onSubmit={handleSubmit}>
                    <textarea
                        required
                        maxLength='1000'
                        placeholder='Say something...'
                        ref={messageBody}
                        className='textarea'></textarea>
                    <input className='btn btn--secondary' type='submit' value='Send' />
                </form>
                {/* Message section to show chats*/}
                <div className='room--container'>
                    {loading && <p className='loading'> Loading... </p>}
                    <>
                        {messages.map((message, index) => {
                            const activeUser = message?.username === user?.name;
                            const activeMessage =
                                messages[index + 1]?.username !== message?.username;
                            return (
                                <div
                                    key={message.$id}
                                    className={`message--wrapper ${activeUser ? 'start' : 'end'}`}>
                                    <div className='message--header'>
                                        {activeMessage && (
                                            <p>
                                                {activeUser ? (
                                                    <span className='username'>
                                                        {message?.username} ●
                                                    </span>
                                                ) : (
                                                    <span>{message?.username}</span>
                                                )}
                                            </p>
                                        )}
                                    </div>
                                    <div className={`message--body ${activeUser ? 'active' : ''}`}>
                                        <span>{message.body}</span>
                                        <small className='message-timestamp'>
                                            {new Date(message?.$createdAt).toLocaleString()}
                                            {message?.$permissions?.includes(
                                                `delete(\"user:${user?.$id}\")`
                                            ) && (
                                                <Trash2
                                                    className='delete--btn'
                                                    onClick={() => {
                                                        deleteMessage(message?.$id);
                                                    }}
                                                />
                                            )}
                                        </small>
                                    </div>
                                </div>
                            );
                        })}
                    </>
                </div>
            </div>
        </div>
    );
}
