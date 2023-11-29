document.getElementById("emailV").addEventListener("blur", (e) => {
    const emailV = document.getElementById("emailV")
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(emailV.value)) {
        errMsg.textContent = "*Please enter a valid mail!";
        emailV.classList.add('invalid');
        document.getElementById("errMsg").style.display = "block";
        e.preventDefault()
    }
    else {
        errMsg.textContent = "";
        emailV.classList.remove("inavlid");
    }
})

function sendOTP() {
    const emailV = document.getElementById("emailV")
    const otpVerify = document.getElementsByClassName("otpVerify")[0];
    let otpval = Math.floor(Math.random() * 10000);

    let emailbody = `<h1>Hi floweryeaaay</h> <br>
              <h2>Your OTP is </h2>${otpval}`

    Email.send({
        SecureToken: "c14a915f-ad3f-4542-98f4-b2414a8adb23",
        To: emailV.value,
        From: "monkeydluffy223355@gmail.com",
        Subject: "This is from Luffy",
        Body: emailbody
    }).then(
        message => {
            if (message == "OK") {
                console.log(message);
                const otpinp = document.getElementById("otpinp");
                const otpbtn = document.getElementById("btnO");
                document.getElementById("mailBox").style.display = "none"
                document.getElementById("otpVerify").style.display = "flex"

                let bTime = 60
                let resender = document.getElementById("timer")
                let refresh = setInterval(() => {

                    if (bTime == 0) {
                        clearInterval(refresh)
                        location.reload();
                    }
                    resender.innerText = ` 00 : ${bTime < 10 ? "0" + bTime : bTime}`;
                    bTime--

                }, 1000);

                otpbtn.addEventListener("click", (e) => {
                    if (otpinp.value == otpval) {
                        e.preventDefault()
                        document.getElementById("success").style.display = "flex";
                        document.getElementById("otp").style.display = "none";
                    }
                    else {
                        document.getElementById("errMsg2").style.display = "block";
                        errMsg2.textContent = "*Invalid OTP!";

                    }
                })


            }
        }
    );
}