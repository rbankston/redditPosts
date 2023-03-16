(function () {
  const browse = document.getElementById("click");

  function createRedditPost(redditObject) {
    const posts = document.getElementById("posts")
    const div = document.createElement('div');
    const p = document.createElement('p');
    const a = document.createElement('a');
    const img = document.createElement('img');
    div.setAttribute("id", redditObject['data']['id']);
    div.setAttribute("class", "redditPosts")
    p.innerText = redditObject['data']['title'];
    a.href = `https://reddit.com/${redditObject['data']['permalink']}`;
    a.innerText = "link";
    img.src = redditObject['data']['thumbnail'];
    posts.append(div);
    div.append(p);
    div.append(img)
    div.append(a);

  }

  browse.addEventListener("click", (e) => {
    if (document.querySelectorAll(".redditPosts") !== null) {
        const oldPosts = document.querySelectorAll(".redditPosts");
        // oldPosts.classList.add('animate__animated', 'animate__bounceOutLeft');
        oldPosts.forEach(posts => {
        posts.remove();
    })
}
    const sub = document.getElementById("subr").value;

    fetch(`https://www.reddit.com/r/${sub}/.json`)
      .then((response) => response.json())
      .then((data) => {
        data["data"]["children"];
        if (data["data"]["children"].length > 10) {
          for (let i = 0; i < 10; i++) {
            createRedditPost(data["data"]["children"][i]);
          }
        } else {
          for (let i = 0; i < data["data"]["children"].length; i++) {
            createRedditPost(data["data"]["children"][i]);
          }
        }
      });
  });



 
})();
