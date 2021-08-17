# เปิดใน Chrome
1. ไปที่ https://popdog.click/play
2. กด F12
3. ไปที่ Console
4. คัดลอก Code นี่ไปวาง
```
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
            username: "https://github.com/tawan475/popdog-TH"
        })
    })
}, 5000)
// https://github.com/tawan475/popdog-TH
```
5. กด Enter
6. เปิดค้างไว้

ในจอ อาจจะขิ้นแค่ที่ละ 1 แต่จริงๆแล้วขื้นทีละ 2000 ทุกๆ 5 วินาที ครับ

**เรียบร้อยแล้วครับ แค่นี่คุณก็ได้ช่วยชาติแล้ว**
