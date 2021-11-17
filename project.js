
window.onload = function () {
    document.getElementById("btn").addEventListener("click", userIdSearch);
};

async function userIdSearch() {
    const IdNumber = document.getElementById("idNo").value;

    const idUser = await fetch(
        "http://jsonplaceholder.typicode.com/users/" + IdNumber
    );
    const userInfo = await idUser.json();

    const userInformation = document.getElementById("userInfo");
    userInformation.innerHTML = "";
    let div1 = document.createElement("div");
    div1.classList = "col-6";
    userInformation.append(div1);
    let template = `
           
                <div> <h3> User Information </h1></div>
                
                 <div> Name: ${userInfo.name}</div>
                 <div> Email: ${userInfo.email}</div>
                 <div> <h5>Addrees <h5></div>
                 <div> Street: ${userInfo.address.street}</div>
                 <div> City: ${userInfo.address.city}</div>
                 <div> Zip: ${userInfo.address.zipcode}</div>
               
           
            <hr>
            `;
    let getPost = document.createElement("button");
    getPost.innerHTML = "Get Posts";
    getPost.onclick = async function () {
        const IdNumber = document.getElementById("idNo").value;

        const postsUser = await fetch(
            "https://jsonplaceholder.typicode.com/posts?userId=" + IdNumber
        );
        const postInfo = await postsUser.json();
        postInfo.forEach((post) => {
            let postContent = document.createElement('div')
            postContent.innerHTML = `<b>Posts:</b><br> title: ${post.title} <br> body:${post.body} <br>

      `
            let viewComment = document.createElement("button");
            let commentBox = document.createElement("div");
            viewComment.innerHTML = "View Comments";
            viewComment.onclick = async function () {
                let result = await fetch(
                    "https://jsonplaceholder.typicode.com/comments?postId=" + post.id
                );
                let comments = await result.json();
                console.log(comments);
                comments.forEach((comment) => {
                    commentBox.innerHTML = `name: ${comment.name} email: ${comment.email} body: ${comment.body}
          `  });
            };
            document.getElementById("posts").append(postContent)
            document.getElementById("posts").append(viewComment);
            document.getElementById("posts").append(commentBox);
        });
    };
    document.getElementById("userInfo").innerHTML = template;
    document.getElementById("userInfo").append(getPost);


}

