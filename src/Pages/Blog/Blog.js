import React from 'react';

const Blog = () => {
    return (
        <>
            <div className='grid grid-cols-2'>
                <div className='border-2 border-slate-500 m-6'>
                    <h1 className='text-2xl font-bold text-center p-3'>JavaScript</h1>
                    <p className='font-bold m-8'>1.Javascript is used in frontend development.<br />2. It is basically used on the client-side. <br />3. 	Javascript can only be run in the browsers. <br />4.
                        Javascript is a programming language that is used for writing scripts on the website. </p>
                </div>
                <div className='border-2 border-slate-500 m-6'>
                    <h1 className='text-2xl font-bold text-center p-3'>NodeJs</h1>
                    <p className='font-bold m-8'>1.Nodejs is used in server-side development. <br />2. 	It is mostly used on the server-side. <br />
                        3. We can run Javascript outside the browser with the help of NodeJS. <br />4. NodeJS is a Javascript runtime environment.</p>
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <div className='border-2 border-slate-500 m-6'>
                    <h1 className='text-2xl font-bold text-center p-3'>SQL</h1>
                    <p className='font-bold m-8'>1.RELATIONAL DATABASE MANAGEMENT SYSTEM.<br />2. These databases are not suited for hierarchical data storage. <br />3. 		Vertically scalable. <br />4.
                        These databases are best suited for complex queries. </p>
                </div>
                <div className='border-2 border-slate-500 m-6'>
                    <h1 className='text-2xl font-bold text-center p-3'>NoSQL</h1>
                    <p className='font-bold m-8'>1.Non-relational or distributed database system. <br />2. These databases are best suited for hierarchical data storage. <br />
                        3. Horizontally scalable. <br />4. These databases are not so good for complex queries.</p>
                </div>
            </div>
            <div className='border-2 border-slate-500 m-6'>
                <h1 className='text-2xl font-bold text-center p-3'>Purpose of JWT and it's work</h1>
                <p className=' font-bold  p-3'>
                    1. JWT means Json Web Token.It is bascically used in Authorization purpose. <br />
                    2. একজন ইউজার যখন কোন এপ্লিকেশনে লগইন করে তখন তাকে তার ইমেইল/ইউজার আইডি দিয়ে লগইন করতে হয়। <br />
                    3. ইমেইল / ইউজার আইডি দিয়ে লগইন করলে সার্ভার তার আউডেনটিটি কনফার্ম করে এবং তাকে একটা এক্সেস টুকেন ধরিয়ে দেয়।<br />
                    4. পরবর্তীতে পুনরায় লগইন করার সময় সে তার এক্সেস টুকেনের মাধ্যমে খুব সহজেই এপ্লিকেশনে লগইন করতে পারে,বারবার ইমেইল / ইউজার আইডি দিয়ে লগইন করার দরকার পড়ে না।<br />
                    5. JWT এর মূলত ৩টি অংশ থাকে। 1.HEADER  2.PAYLOAD  3.SIGNATURE<br />
                    6. JWT এর ক্ষেত্রে একটা সুবিধা হচ্ছে এক্সেস টুকেনের ভ্যালিডিটি সবসময় থাকে না।নির্দিষ্ট সময় পর ঐ টুকেনের মেয়াদ শেষ হয়ে যায় তখন ইউজারের নতুন করে এক্সেস টুকেনের দরকার পড়ে। <br />
                </p>
            </div>
        </>
    );
};

export default Blog;