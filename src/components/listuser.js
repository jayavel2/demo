import React from "react";

function ListUser(){
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    fetch('https://61e3b3a1fbee6800175eb09d.mockapi.io/users',
            {
                method:'Get',
                headers:{
                    'Content-Type':'application/json'
                },
            }
            )
            .then((res)=>res.json())
            .then(json=>{
                setPost(json);
            })
    }, []);

  if (!post) return null;
  
    return(
        <div>
            <h1>List User</h1>
            { post.map((item)=>(
                <ol key={item.id}>
                    First Name: {item.fname},
                    Last Name : {item.lname}
                </ol>
            ))}
        </div>
    )
}
export default ListUser