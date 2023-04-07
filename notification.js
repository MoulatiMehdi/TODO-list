const msg = {title:'1337@FIT', 
   body: 'A space is found,Hurry Up bro 📢⚡',
   icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEUAAAD////t7e2MjIy2tra5ubnPz8/q6uqzs7P8/Pw5OTk2NjZYWFhgYGAFBQWtra1BQUGOjo4nJydycnJsbGzBwcEQEBBoaGh/f39dXV1jY2NPT09KSkry8vKCgoLV1dUbGxsvLy/e3t6lpaWbK92sAAACvklEQVR4nO3aiXqiMBSGYYIrWkFcqx3GLvd/j8NSWjk5oYxKFZ7vfVpr8QD5iQsxeB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOi3MAytBaFe6SnL7WLH2tnqYfXfZu25lrK9/92HPELuXYVNypyH6GKDOB7Eg1TxN1679r7MHh2ciXMHWTerFOXbzW4PlaaH3qrc71llXnzjfJ5nhJPrIK5lZSGqVoXeRq/bioRLvcyYFhIGQZD9ZtIdjF2FacuDSlOKFayER9HiYrNmJDa3lJvLS9tK+LWHuoRrvUWRrNtbVfmKSkJ9g20kNOPRdpv+bE1dwpfhdFi1NVof/hkNZZ2eMDBJtS5K2upD81zcXdUlVF6cT0pCvc6RcCKWTUw7fWjM5/vXrLYPbYus3nqW2o6O16HxxbJJS+80JHTqUMK/xd2eJjyl9sXdfiYMz277mTA7lypPp34xYXHWZn9atJHwzO8mTHz/tKsW9ilhGvF1t3sVhQ+X8NAw4UJLqA1g7pswbdJsXvG20c7aUnNRt9fOSzV37sPQaza2sIecQXcSNhgfZmSZ0T4tNHdPaHVNoL8Ok+LhDia8+FnamYRPwrPjncau60jCnVyijoAVh44ktF11Xqoh4dVIKJGwRMIvJLwaCSUSlh4n4fm8hTUEd81HXDpvoWkx4epjmoqyQcB7FKV3F3bNy3AqDPW5p8iqe4AR8Cow5TxfIbZrlDngZvOHRp0/1LScMPhMmE0Iawk3eaDgu80/zAF/j4Af4VuMVSLmY5XrBRzz81YfOupGNZdflPzsYNwkkGX+7lcka7vm6KtEb4feItHKko8Gl5GM/Ykvv+lvTfOLWqqV7hg/X6dz6wtparatt0VbaFe6LnZqFCA9Crs2cwIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEfwD4GSJiDJ9jp7AAAAAElFTkSuQmCC'
}

const notifyMe = ({title,body,icon}) => {
    if (!window.Notification) {
      console.log('Browser does not support notifications.')
    } else {
      // check if permission is already granted
      if (Notification.permission === 'granted') {
        // show notification here
        notify = new Notification(title,{body,icon})
      } else {
        // request permission from the user
        Notification.requestPermission()
          .then(function (p) {
            if (p === 'granted') {
              // show notification here
                notify = new Notification(title, { body, icon })
            } else {
              console.log('User has blocked notifications.')
            }
          })
          .catch(function (err) {
            console.error(err)
          })
      }
    }
}
  


let table   = document.getElementById("index_meetings")
if (table) {
   

    let rows = table.rows
    let spaceFound = false


    for (let i = 1; i < rows.length; i++) {
        if (rows[i].cells[1].innerText !== "No spaces left") {
            spaceFound = true
            console.log("at row : " + i)
            rows[i].style.backgroundColor = "aquamarine"
            break;

        }
    }	
	try{
         console.log(document.getElementsByTagName("iframe"))
         document.getElementsByClassName("recaptcha-checkbox-checkmark")[0].click()
	}catch(err){
	}
    if (!spaceFound) {
        console.log("bruh, no space is found.")
        console.log("the page will be reload after 1 minute.")
        let div = document.createElement("div")
        div.innerText = "No Space"
        with (div.style) {
            fontSize = "200px"
            align = "center"
            width = "100%"
            height = "100%"
            color = "red"
            backgroundColor = "rgb(0,255,0,0.1)"
            position = "fixed"
            display = "flex"
            justifyContent = "center"
            alignItems = "center"
        }
        div.attributes.align = "center"
        document.body.insertBefore(div, document.body.firstChild)
        let time = 5
        let ID = null
        ID = setInterval(function () {
            if (time == 0) {
                clearInterval(ID)
                location.reload(true)
            } else {
                div.innerText = time
                console.log(time--)
            }
                    
        }, 1000)
    }
    else {
        console.log("a space is found")
        notifyMe(msg)
    }
}
