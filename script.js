if (window.location.href !== "https://popdog.click/play") alert("click play or goto https://popdog.click/play");
setInterval(() => {
    fetch("/clicked/v2", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify({
            clicks: 2000,
            uuid: window.localStorage.uuid,
            username: "github.com/tawan475/popdog-TH"
        })
    })
}, 5000)
// https://github.com/tawan475/popdog-TH
