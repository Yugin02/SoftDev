var { add, num, yamahaerox, sub, drivercheckbox, passengerHelmetCheckbox, jacketCheckbox, pantsCheckbox, glovesCheckbox, helmetCheckbox, phoneHolderCheckbox, bootsCheckbox, deliverCheckbox, departureDate, returningDate, rentalDay, registration, registerTxt, registerBtn, logInProcess1, bImage1, bImage, logInText, logInBtn, btnText, logInText1, logInProcess, backBtn, logInBtn1, motorinfo, footer, information, motorColor0, Mcolor, motorColor1, motorColor2, motorColor3, yamahaAerox, motor4, color0, color1, color2, color3, info, bouncingDiv, bDate1} = newFunction()
const username = [];
const password = [];
const email = [];
let a = 1;
let yamahaPrice = 900;
let totalPrice = 900;
let timediffer;
let daysdiffer;
let date1;
let date2;

        add.addEventListener('click', ()=>{
            a++
            totalPrice = totalPrice + yamahaPrice;
            num.innerText = a;
            yamahaerox.innerText = "₱" + totalPrice;
        });
        sub.addEventListener('click', ()=>{
            if (a == 1){
                a = 1;
            }
            else {
                a--
                totalPrice = totalPrice - yamahaPrice;
                num.innerText = a;
                yamahaerox.innerText = "₱" + totalPrice;
            }

        });
        jacketCheckbox.addEventListener('click', ()=>{
            const checkbox = document.querySelector('.jacketCheckbox img');
            if(checkbox.style.visibility == "visible"){
                checkbox.style.visibility = "hidden";
                totalPrice = totalPrice - 450;
                yamahaerox.innerText = "₱" + totalPrice;
            }
            else{
                checkbox.style.visibility = "visible";
                totalPrice = totalPrice + 450;
                yamahaerox.innerText = "₱" + totalPrice;
            }  
        })
        glovesCheckbox.addEventListener('click', ()=>{
            const checkbox = document.querySelector('.glovesCheckbox img');
            if(checkbox.style.visibility == "visible"){
                checkbox.style.visibility = "hidden";
                totalPrice = totalPrice - 300;
                yamahaerox.innerText = "₱" + totalPrice;
            }
            else{
                checkbox.style.visibility = "visible";
                totalPrice = totalPrice + 300;
                yamahaerox.innerText = "₱" + totalPrice;
            }  
        })
        helmetCheckbox.addEventListener('click', ()=>{
            const checkbox = document.querySelector('.helmetCheckbox img');
            if(checkbox.style.visibility == "visible"){
                checkbox.style.visibility = "hidden";
                totalPrice = totalPrice - 400;
                yamahaerox.innerText = "₱" + totalPrice;
            }
            else{
                checkbox.style.visibility = "visible";
                totalPrice = totalPrice + 400;
                yamahaerox.innerText = "₱" + totalPrice;
            }  
        })
        phoneHolderCheckbox.addEventListener('click', ()=>{
            const checkbox = document.querySelector('.phoneHolderCheckbox img');
            if(checkbox.style.visibility == "visible"){
                checkbox.style.visibility = "hidden";
                totalPrice = totalPrice - 150;
                yamahaerox.innerText = "₱" + totalPrice;
            }
            else{
                checkbox.style.visibility = "visible";
                totalPrice = totalPrice + 150;
                yamahaerox.innerText = "₱" + totalPrice;
            }  
        })
        deliverCheckbox.addEventListener('click', ()=>{
            const checkbox = document.querySelector('.deliverCheckbox img');
            if(checkbox.style.visibility == "visible"){
                checkbox.style.visibility = "hidden";
                totalPrice = totalPrice - 50;
                yamahaerox.innerText = "₱" + totalPrice;
            }
            else{
                checkbox.style.visibility = "visible";
                totalPrice = totalPrice + 50;
                yamahaerox.innerText = "₱" + totalPrice;
            }  
        })
        departureDate.addEventListener('input', ()=>{
            date1 = new Date (departureDate.value);
            console.log(date1)
        })
        returningDate.addEventListener('input', ()=>{
            date2 = new Date (returningDate.value);
            console.log(date2)

            timediffer = date2 - date1;
            daysdiffer = Math.floor(timediffer / (1000 * 60 * 60 * 24));
            rentalDay.innerText = daysdiffer + " day rental"
            
            if(daysdiffer > 1){
                totalPrice = 800 * daysdiffer
                yamahaPrice = 800
                yamahaerox.innerText = "₱" + totalPrice;
            }

        })


        function FAQshow(){
            const Rm1stLI = document.querySelector('.RM1st li')
            const Rm1stImg = document.querySelector('.RM1st img')

            Rm1stImg.style.transition = "0.5s"
            if (Rm1stLI.style.display == "none"){
                Rm1stLI.style.display = "block"
                Rm1stImg.style.rotate = "180deg"
            } else{
                Rm1stLI.style.display = "none"
                Rm1stImg.style.rotate = "0deg"
            }
        }
        function FAQshow1(){
            const Rm2ndLI = document.querySelector('.RM2nd li')
            const Rm2ndImg = document.querySelector('.RM2nd img')

            Rm2ndImg.style.transition = "0.5s"
            if (Rm2ndLI.style.display == "none"){
                Rm2ndLI.style.display = "block"
                Rm2ndImg.style.rotate = "180deg"
            } else{
                Rm2ndLI.style.display = "none"
                Rm2ndImg.style.rotate = "0deg"
            }
        }
        function FAQshow2(){
            const Rm3rdLI = document.querySelector('.RM3rd li')
            const Rm3rdImg = document.querySelector('.RM3rd img')

            Rm3rdImg.style.transition = "0.5s"
            if (Rm3rdLI.style.display == "none"){
                Rm3rdLI.style.display = "block"
                Rm3rdImg.style.rotate = "180deg"
            } else{
                Rm3rdLI.style.display = "none"
                Rm3rdImg.style.rotate = "0deg"
            }
        }
        function FAQshow3(){
            const Rm4thLI = document.querySelector('.RM4th li')
            const Rm4thImg = document.querySelector('.RM4th img')

            Rm4thImg.style.transition = "0.5s"
            if (Rm4thLI.style.display == "none"){
                Rm4thLI.style.display = "block"
                Rm4thImg.style.rotate = "180deg"
            } else{
                Rm4thLI.style.display = "none"
                Rm4thImg.style.rotate = "0deg"
            }
        }
        function FAQshow4(){
            const Rm5thLI = document.querySelector('.RM5th li')
            const Rm5thImg = document.querySelector('.RM5th img')

            Rm5thImg.style.transition = "0.5s"
            if (Rm5thLI.style.display == "none"){
                Rm5thLI.style.display = "block"
                Rm5thImg.style.rotate = "180deg"
            } else{
                Rm5thLI.style.display = "none"
                Rm5thImg.style.rotate = "0deg"
            }
        }
        function FAQshow5(){
            const CS1stLI = document.querySelector('.CS1st li')
            const CS1stImg = document.querySelector('.CS1st img')

            CS1stImg.style.transition = "0.5s"
            if (CS1stLI.style.display == "none"){
                CS1stLI.style.display = "block"
                CS1stImg.style.rotate = "180deg"
            } else{
                CS1stLI.style.display = "none"
                CS1stImg.style.rotate = "0deg"
            }
        }
        function FAQshow6(){
            const CS2ndLI = document.querySelector('.CS2nd li')
            const CS2ndImg = document.querySelector('.CS2nd img')

            CS2ndImg.style.transition = "0.5s"
            if (CS2ndLI.style.display == "none"){
                CS2ndLI.style.display = "block"
                CS2ndImg.style.rotate = "180deg"
            } else{
                CS2ndLI.style.display = "none"
                CS2ndImg.style.rotate = "0deg"
            }
        }
        function Gcash(){
            const gcash = document.getElementById("gcashPicture");
            const continuee = document.querySelector('.continuee');
            const cashit = document.querySelector('.cashit');

            if(gcash.src.match("images/icon/gcash.png")){
                gcash.src = "images/icon/gCashColored.png";
                continuee.innerText = "Continue with GCash";
                cashit.style.color = "#000"
            } else{
                gcash.src = "images/icon/gcash.png";
                continuee.innerText = "Continue with...";
            }
        }
        function cash(){
            color()
        }
        function seeMore(){
            const priceDetail = document.querySelector('.priceDetail')
            const hide = document.getElementById("wew")
            const hide1 = document.getElementById("wew1")
            const hide2 = document.getElementById("wew2")
            const hide3 = document.getElementById("wew3")
            const hide4 = document.getElementById("wew4")
            const hide5 = document.getElementById("wew5")
            const totalnaTotal = document.querySelector('.totalnaTotal')
            const dropdown = document.querySelector('.dropdown')
            const dropdownimg = document.querySelector('.dropdown img')
            const seeMore = document.querySelector('.seeMore')
            totalnaTotal.zIndex = 10

            if (seeMore.innerHTML === "see more"){
                priceDetail.style.height = "893px"
                totalnaTotal.style.marginTop = "-20px"
                dropdown.style.marginTop = "170px"
                dropdownimg.style.rotate = "180deg"
                seeMore.innerHTML = "Hide"

                hide.style.visibility = "visible"
                hide3.style.visibility = "visible"
                

                setTimeout(() => {
                    hide1.style.visibility = "visible"
                    hide2.style.visibility = "visible"
                    hide4.style.visibility = "visible"
                    hide5.style.visibility = "visible"
                    }, 200);
            } else{
                priceDetail.style.height = "833px"
                totalnaTotal.style.marginTop = "-70px"
                dropdown.style.marginTop = "110px"
                dropdownimg.style.rotate = "360deg"
                seeMore.innerHTML = "see more"

                hide.style.visibility = "hidden"
                hide1.style.visibility = "hidden"
                hide2.style.visibility = "hidden"
                hide3.style.visibility = "hidden"
                hide4.style.visibility = "hidden"
                hide5.style.visibility = "hidden"
            }

        }
        function logIn(){
            
            registration.style.visibility = "visible"
            registration.style.zIndex = "-1"
            registerTxt.style.visibility = "visible"
            registerBtn.style.visibility = "visible"
            logInProcess1.style.visibility = "visible"

            bImage1.style.left = "16%"
            bImage.style.left = "16%"
            logInText.style.left = "66%"
            logInText.style.transition = ".5s"

            logInBtn.style.opacity = "0"
            btnText.style.opacity = "0"
            logInText1.style.opacity = "0"
            bImage.style.opacity = "0"
            logInProcess.style.zIndex = "4"
            bImage1.style.zIndex = "3"
            logInText.style.paddingLeft = "20px"
            logInText.style.zIndex = "2"
            bImage1.style.borderBottomRightRadius = "0px"
            bImage1.style.borderTopRightRadius = "0px"

            setTimeout(() => { logInProcess.style.opacity = "1" }, 400);

            backBtn.addEventListener('click', ()=>{

                registration.style.visibility = "hidden"
                registration.style.zIndex = "-1"

                bImage1.style.left = "53%"
                bImage.style.left = "53%"
                logInText.style.left = "38%"
                logInText.style.transition = ".5s"

                logInProcess.style.opacity = "0"
                logInProcess.style.zIndex = ""
                bImage.style.opacity = "1"
                bImage.style.zIndex = "4"
                logInText.style.paddingLeft = ""
                
                setTimeout(() => {
                     logInText1.style.opacity = "1" 
                     logInBtn.style.opacity = "1"
                     btnText.style.opacity = "1"
                }, 300);
            })

            registerBtn.addEventListener('click', ()=>{

                registration.style.visibility = "visible"
                registration.style.zIndex = "5"
                registerTxt.style.visibility = "hidden"
                registerBtn.style.visibility = "hidden"
                backBtn.style.visibility = "visible"
                logInProcess1.style.visibility = "hidden"
            })

            logInBtn1.addEventListener('click', ()=>{
                registration.style.visibility = "hidden"
                registration.style.zIndex = "-1"
                registerBtn.style.visibility = "visible"
                logInProcess1.style.visibility = "visible"
                registerTxt.style.visibility = "visible"
            })

        }
        function showinfo(){
            if(motorinfo.style.top = "-75vh"){
                hideOthers2();
                hideOthers3();
                hideOthers4();
                hideOthers5();
                show1();
            } else {
                show1();
            }
        }
        function hideinfo(){
            const XMAXdisplay = document.querySelector('.XMAXdisplay')
            const yamahaNmaxdisplay = document.querySelector('.yamahaNmaxdisplay')

            motorinfo.style.top = "-75vh"
            footer.style.marginTop = ""
            information.style.right = "-650px"
            motorColor0.style.marginLeft = "-700px"
            Mcolor.style.marginLeft = "-600px"

            motorinfo.style.transition = "1s"
            information.style.transition = ".5s"
            motorColor0.style.transition = ".5s"
            Mcolor.style.transition = ".5s"
            footer.style.transition = "1s"

            motorColor0.style.visibility = "visible"
            motorColor1.style.visibility = "hidden"
            motorColor2.style.visibility = "hidden"
            motorColor3.style.visibility = "hidden"

            yamahaAerox.style.display = "block"
            motor4.style.display = "none"
            yamahaNmaxdisplay.style.display = "block"
            XMAXdisplay.style.display = "none"

            motorinfo.style.zIndex = "10"

            color0.style.border = "solid 2px #d60a0a"
            color0.style.marginLeft = "9px"
            color1.style.border = "solid 0px"
            color2.style.border = "solid 0px"
            color3.style.border = "solid 0px"

        }
        function showinfo1(){
            if(motorinfo.style.top = "-75vh"){
                hideOthers1();
                hideOthers3();
                hideOthers4();
                hideOthers5();
                show2();
            } else {
                show2();
            }
        }
        function hideinfo1(){
            const color0 = document.querySelector('.mioGearColor0')
            const color1 = document.querySelector('.mioGearColor1')
            const color2 = document.querySelector('.mioGearColor2')
            const color3 = document.querySelector('.mioGearColor3')
            const yamahaMioColor0 = document.querySelector('.mioGearBlack')
            const yamahaMioColor1 = document.querySelector('.mioGearGray')
            const yamahaMioColor2 = document.querySelector('.mioGearMatteBlack')
            const yamahaMioColor3 = document.querySelector('.mioGearMatteBrown')
            const mioGearColors = document.querySelector('.mioGearColors')
            const mioGearImages = document.querySelector('.mioGearImages img')
            const mioGEarInfo = document.querySelector('.mioGearInfo')
            const yamahaMioGear = document.querySelector('.yamahaMioGEar')
            const XMAXdisplay = document.querySelector('.XMAXdisplay')
            const yamahaNmaxdisplay = document.querySelector('.yamahaNmaxdisplay')

            motorinfo.style.top = "-75vh"
            footer.style.marginTop = "0px"
            yamahaMioColor0.style.marginLeft = "0px"
            yamahaMioColor1.style.marginLeft = "0px"
            yamahaMioColor2.style.marginLeft = "0px"
            yamahaMioColor3.style.marginLeft = "0px"
            mioGearColors.style.marginLeft = "-600px"
            mioGearImages.style.marginLeft = "-600px"
            mioGEarInfo.style.marginLeft = "1300px"

            yamahaMioGear.style.display = "block"
            motor4.style.display = "none"
            XMAXdisplay.style.display = "none"
            yamahaNmaxdisplay.style.display = "block"

            motorinfo.style.transition = "1s"
            mioGEarInfo.style.transition = ".5s"
            mioGearColors.style.transition = ".5s"
            mioGearImages.style.transition = ".5s"
            footer.style.transition = "1s"

            yamahaMioColor0.style.visibility = "visible"
            yamahaMioColor1.style.visibility = "hidden"
            yamahaMioColor2.style.visibility = "hidden"
            yamahaMioColor3.style.visibility = "hidden"

            color0.style.border = "solid 2px #d60a0a"
            color0.style.marginLeft = "9px"
            color1.style.border = "solid 0px"
            color2.style.border = "solid 0px"
            color3.style.border = "solid 0px"

            mioGearColors.style.zIndex = "-1"
        }
        function showinfo2(){
            if(motorinfo.style.top = "-75vh"){
                hideOthers1();
                hideOthers2();
                hideOthers4();
                hideOthers5();
                show3();
            } else {
                show3();
            }
        }
        function hideinfo2(){
            const color0 = document.querySelector('.ADVColor0')
            const color1 = document.querySelector('.ADVColor1')
            const color2 = document.querySelector('.ADVColor2')
            const ADVColor0 = document.querySelector('.ADVWhite')
            const ADVColor1 = document.querySelector('.ADVBlack')
            const ADVColor2 = document.querySelector('.ADVRed')
            const hondaADVColors = document.querySelector('.hondaADVColors')
            const ADVImages = document.querySelector('.ADVImages')
            const ADVInfo = document.querySelector('.ADVInfo')
            const HondaADV = document.querySelector('.HondaADV')
            const yamahaNmaxdisplay = document.querySelector('.yamahaNmaxdisplay')
            const XMAXdisplay = document.querySelector('.XMAXdisplay')

            hondaADVColors.style.zIndex = "-1"

            motorinfo.style.top = "-75vh"
            footer.style.marginTop = "0px"
            ADVColor0.style.marginLeft = "0px"
            ADVColor1.style.marginLeft = "0px"
            ADVColor2.style.marginLeft = "0px"
            hondaADVColors.style.marginLeft = "-600px"
            ADVImages.style.marginLeft = "-670px"
            ADVInfo.style.marginLeft = "2097px"

            HondaADV.style.display = "block"
            motor4.style.display = "none"
            XMAXdisplay.style.display = "none"
            yamahaNmaxdisplay.style.display = "block"

            motorinfo.style.transition = "1s"
            ADVInfo.style.transition = ".5s"
            hondaADVColors.style.transition = ".5s"
            ADVImages.style.transition = ".5s"
            footer.style.transition = "1s"

            ADVColor0.style.visibility = "visible"
            ADVColor1.style.visibility = "hidden"
            ADVColor2.style.visibility = "hidden"

            color0.style.border = "solid 2px #d60a0a"
            color0.style.marginLeft = "9px"
            color1.style.border = "solid 0px"
            color2.style.border = "solid 0px"
            color3.style.border = "solid 0px"
        }
        function showinfo3(){
            if(motorinfo.style.top = "-75vh"){
                hideOthers1();
                hideOthers2();
                hideOthers3();
                hideOthers5();
                show4();
            } else {
                show4();
            }
        }
        function hideinfo3(){
            const color0 = document.querySelector('.NMAXcolor0')
            const color1 = document.querySelector('.NMAXcolor1')
            const color2 = document.querySelector('.NMAXcolor2')
            const color3 = document.querySelector('.NMAXcolor3')
            const NMAXColor0 = document.querySelector('.NMAXwhite')
            const NMAXColor1 = document.querySelector('.NMAXblack')
            const NMAXColor2 = document.querySelector('.NMAXgray')
            const NMAXColor3 = document.querySelector('.NMAXmedyoblue')
            const NMAXcolors = document.querySelector('.NMAXcolors')
            const NMAXimages = document.querySelector('.NMAXimages')
            const NMAXinfo = document.querySelector('.NMAXinfo')
            const yamahaNMAX = document.querySelector('.yamahaNmaxdisplay')
            const XMAXdisplay = document.querySelector('.XMAXdisplay')

            NMAXcolors.style.zIndex = "-1"

            motorinfo.style.top = "-75vh"
            footer.style.marginTop = "0px"
            NMAXcolors.style.marginLeft = "-600px"
            NMAXimages.style.marginLeft = "-670px"
            NMAXinfo.style.marginLeft = "2524px"

            yamahaNMAX.style.display = "block"
            XMAXdisplay.style.display = "none"

            motorinfo.style.transition = "1s"
            NMAXinfo.style.transition = ".5s"
            NMAXimages.style.transition = "1.5s"
            footer.style.transition = "1s"

            NMAXColor0.style.visibility = "visible"
            NMAXColor1.style.visibility = "hidden"
            NMAXColor2.style.visibility = "hidden"
            NMAXColor3.style.visibility = "hidden"

            color0.style.border = "solid 2px #d60a0a"
            color0.style.marginLeft = "9px"
            color1.style.border = "solid 0px"
            color2.style.border = "solid 0px"
            color3.style.border = "solid 0px"
        }
        function showinfo4(){
            if(motorinfo.style.top = "-75vh"){
                hideOthers1();
                hideOthers2();
                hideOthers3();
                hideOthers4();
                show5();
            } else {
                show5();
            }
        }
        function hideinfo4(){
            const color0 = document.querySelector('.BurgmanColor0')
            const color1 = document.querySelector('.BurgmanColor1')
            const color2 = document.querySelector('.BurgmanColor2')
            const BurgmanColor0 = document.querySelector('.burgmanWhite')
            const BurgmanColor1 = document.querySelector('.burgmanblack')
            const BurgmanColor2 = document.querySelector('.burgmanRed')
            const burgmanColors = document.querySelector('.burgmanColors')
            const burgmanImages = document.querySelector('.burgmanImages')
            const burgmanInfo = document.querySelector('.burgmanInfo')
            const BurgmanStreet = document.querySelector('.burgmanDisplay')
            const XMAXdisplay = document.querySelector('.XMAXdisplay')

            burgmanColors.style.zIndex = "-1"

            motorinfo.style.top = "-75vh"
            footer.style.marginTop = "0px"
            burgmanColors.style.marginLeft = "-600px"
            burgmanImages.style.marginLeft = "-600px"
            burgmanInfo.style.marginLeft = "2524px"

            BurgmanStreet.style.display = "block"
            XMAXdisplay.style.display = "none"

            motorinfo.style.transition = "1s"
            burgmanInfo.style.transition = ".5s"
            burgmanImages.style.transition = "1.5s"
            footer.style.transition = "1s"

            BurgmanColor0.style.visibility = "visible"
            BurgmanColor1.style.visibility = "hidden"
            BurgmanColor2.style.visibility = "hidden"

            color0.style.border = "solid 2px #d60a0a"
            color0.style.marginLeft = "9px"
            color1.style.border = "solid 0px"
            color2.style.border = "solid 0px"
            color3.style.border = "solid 0px"
        }
        function color(){
            const continuee = document.querySelector('.continuee');
            const cashit = document.querySelector('.cashit');
            const gcash = document.getElementById("gcashPicture");

            if (cashit.style.color != "#000"){
                gcash.src = "images/icon/gcash.png";
                cashit.style.color = "#003087"
                continuee.innerText = "Cash on Pick-up";
            } else{
            cashit.style.color = "#000"
            continuee.innerText = "Continue with...";
            }
        }
        function nonLocalDriver(){
            const localDriver = document.querySelector('.driversInfo')
            const nocalLocalDriver = document.querySelector('.non-local-driver')

            localDriver.style.visibility = "hidden"
            nocalLocalDriver.style.visibility = "visible"
        }
        function localDriver(){
            const localDriver = document.querySelector('.driversInfo')
            const nocalLocalDriver = document.querySelector('.non-local-driver')

            localDriver.style.visibility = "visible"
            nocalLocalDriver.style.visibility = "hidden"
        }
        function confirmation(){
            const confirmation = document.querySelector('.confirmation')
            confirmation.style.visibility = "visible";
        }
        function confirmationCancel(){
            const confirmation = document.querySelector('.confirmation')
            confirmation.style.visibility = "hidden";
        }
        function confirmationConfirm(){
            const list1 = document.querySelector('.list1')
            const confirmation = document.querySelector('.confirmation')
            const warapaRenta = document.querySelector('.warapaRenta')

            confirmation.style.visibility = "hidden";
            warapaRenta.style.visibility = "visible";
            list1.style.marginLeft = "800px"

            list1.style.transition = ".5s"
        }
        function userLogin(){
            const userName = document.querySelector('.Lusername')
            const passWord = document.querySelector('.Lpassword')
            const errorPrompt = document.querySelector('.logInProcess1 span')
            const profile = document.querySelector('nav ul li:last-child')      

            if(!username.includes(userName.value) && !password.includes(passWord.value)){
                errorPrompt.style.visibility = "visible";
                setTimeout(() => { 
                    errorPrompt.style.visibility = "hidden" ;
                }, 2500);
            }
            else{
                profile.style.display = "contents";
                registration.style.visibility = "hidden"
                registration.style.zIndex = "-1"

                bImage1.style.left = "53%"
                bImage.style.left = "53%"
                logInText.style.left = "50%"
                logInText1.style.marginLeft = "60px"
                logInText.style.transition = ".5s"

                logInProcess.style.opacity = "0"
                logInProcess.style.zIndex = ""
                bImage.style.opacity = "1"
                logInText.style.paddingLeft = ""

                bImage.style.display = "none"
                bImage1.style.display = "none"
                logInText1.style.opacity = "1" 
                logInBtn.style.display = "none"
                btnText.style.display = "none"
                logInText.style.top = "57%"
            }
        }
        function register(){
            const Rusername = document.querySelector('.Rusername')
            const eMail = document.querySelector('.eMail')
            const Rpassword = document.querySelector('.Rpassword')
            const Cpassword = document.querySelector('.CpassWord')
            const emailExist = document.querySelector('.emailExist')
            const created = document.querySelector('.created')

            if(email.includes(eMail.value)){
                emailExist.style.visibility = "visible"
                created.style.visibility = "hidden"

                setTimeout(() => { 
                    emailExist.style.visibility = "hidden" 
                }, 3000);
            } else if(Rusername.value === ""){}else {
                email.push(eMail.value)
                username.push(Rusername.value)
                password.push(Rpassword.value)

                created.style.visibility = "visible"
                emailExist.style.visibility = "hidden"
                Rusername.value = ""
                eMail.value = ""
                Rpassword.value = ""
                Cpassword.value = ""

                setTimeout(() => { created.style.visibility = "hidden" }, 3000);
            }
        }
        function hideOthers1(){
            const XMAXdisplay = document.querySelector('.XMAXdisplay')
            const yamahaNmaxdisplay = document.querySelector('.yamahaNmaxdisplay')

            information.style.right = "-650px"
            motorColor0.style.marginLeft = "-700px"
            Mcolor.style.marginLeft = "-600px"

            information.style.transition = ".5s"
            motorColor0.style.transition = ".5s"
            Mcolor.style.transition = ".5s"

            motorColor0.style.visibility = "visible"
            motorColor1.style.visibility = "hidden"
            motorColor2.style.visibility = "hidden"
            motorColor3.style.visibility = "hidden"

            yamahaAerox.style.display = "block"
            motor4.style.display = "none"
            yamahaNmaxdisplay.style.display = "block"
            XMAXdisplay.style.display = "none"

            color0.style.border = "solid 2px #d60a0a"
            color0.style.marginLeft = "9px"
            color1.style.border = "solid 0px"
            color2.style.border = "solid 0px"
            color3.style.border = "solid 0px"
        }
        function hideOthers2(){
            const color0 = document.querySelector('.mioGearColor0')
            const color1 = document.querySelector('.mioGearColor1')
            const color2 = document.querySelector('.mioGearColor2')
            const color3 = document.querySelector('.mioGearColor3')
            const yamahaMioColor0 = document.querySelector('.mioGearBlack')
            const yamahaMioColor1 = document.querySelector('.mioGearGray')
            const yamahaMioColor2 = document.querySelector('.mioGearMatteBlack')
            const yamahaMioColor3 = document.querySelector('.mioGearMatteBrown')
            const mioGearColors = document.querySelector('.mioGearColors')
            const mioGearImages = document.querySelector('.mioGearImages img')
            const mioGEarInfo = document.querySelector('.mioGearInfo')
            const yamahaMioGear = document.querySelector('.yamahaMioGEar')
            const XMAXdisplay = document.querySelector('.XMAXdisplay')
            const yamahaNmaxdisplay = document.querySelector('.yamahaNmaxdisplay')

            yamahaMioColor0.style.marginLeft = "0px"
            yamahaMioColor1.style.marginLeft = "0px"
            yamahaMioColor2.style.marginLeft = "0px"
            yamahaMioColor3.style.marginLeft = "0px"
            mioGearColors.style.marginLeft = "-600px"
            mioGearImages.style.marginLeft = "-600px"
            mioGEarInfo.style.marginLeft = "1300px"

            yamahaMioGear.style.display = "block"
            motor4.style.display = "none"
            XMAXdisplay.style.display = "none"
            yamahaNmaxdisplay.style.display = "block"

            mioGEarInfo.style.transition = ".5s"
            mioGearColors.style.transition = ".5s"
            mioGearImages.style.transition = ".5s"

            yamahaMioColor0.style.visibility = "visible"
            yamahaMioColor1.style.visibility = "hidden"
            yamahaMioColor2.style.visibility = "hidden"
            yamahaMioColor3.style.visibility = "hidden"

            color0.style.border = "solid 2px #d60a0a"
            color0.style.marginLeft = "9px"
            color1.style.border = "solid 0px"
            color2.style.border = "solid 0px"
            color3.style.border = "solid 0px"

            mioGearColors.style.zIndex = "-1"
        }
        function hideOthers3(){
            const color0 = document.querySelector('.ADVColor0')
            const color1 = document.querySelector('.ADVColor1')
            const color2 = document.querySelector('.ADVColor2')
            const ADVColor0 = document.querySelector('.ADVWhite')
            const ADVColor1 = document.querySelector('.ADVBlack')
            const ADVColor2 = document.querySelector('.ADVRed')
            const hondaADVColors = document.querySelector('.hondaADVColors')
            const ADVImages = document.querySelector('.ADVImages')
            const ADVInfo = document.querySelector('.ADVInfo')
            const HondaADV = document.querySelector('.HondaADV')
            const yamahaNmaxdisplay = document.querySelector('.yamahaNmaxdisplay')
            const XMAXdisplay = document.querySelector('.XMAXdisplay')

            hondaADVColors.style.zIndex = "-1"

            ADVColor0.style.marginLeft = "0px"
            ADVColor1.style.marginLeft = "0px"
            ADVColor2.style.marginLeft = "0px"
            hondaADVColors.style.marginLeft = "-600px"
            ADVImages.style.marginLeft = "-670px"
            ADVInfo.style.marginLeft = "2097px"

            HondaADV.style.display = "block"
            XMAXdisplay.style.display = "none"
            yamahaNmaxdisplay.style.display = "block"

            ADVInfo.style.transition = ".5s"
            hondaADVColors.style.transition = ".5s"
            ADVImages.style.transition = ".5s"

            ADVColor0.style.visibility = "visible"
            ADVColor1.style.visibility = "hidden"
            ADVColor2.style.visibility = "hidden"

            color0.style.border = "solid 2px #d60a0a"
            color0.style.marginLeft = "9px"
            color1.style.border = "solid 0px"
            color2.style.border = "solid 0px"
            color3.style.border = "solid 0px"
        }
        function hideOthers4(){
            const color0 = document.querySelector('.NMAXcolor0')
            const color1 = document.querySelector('.NMAXcolor1')
            const color2 = document.querySelector('.NMAXcolor2')
            const color3 = document.querySelector('.NMAXcolor3')
            const NMAXColor0 = document.querySelector('.NMAXwhite')
            const NMAXColor1 = document.querySelector('.NMAXblack')
            const NMAXColor2 = document.querySelector('.NMAXgray')
            const NMAXColor3 = document.querySelector('.NMAXmedyoblue')
            const NMAXcolors = document.querySelector('.NMAXcolors')
            const NMAXimages = document.querySelector('.NMAXimages')
            const NMAXinfo = document.querySelector('.NMAXinfo')
            const yamahaNMAX = document.querySelector('.yamahaNmaxdisplay')
            const XMAXdisplay = document.querySelector('.XMAXdisplay')

            NMAXcolors.style.zIndex = "-1"

            NMAXcolors.style.marginLeft = "-600px"
            NMAXimages.style.marginLeft = "-670px"
            NMAXinfo.style.marginLeft = "2524px"

            yamahaNMAX.style.display = "block"
            XMAXdisplay.style.display = "none"

            NMAXinfo.style.transition = ".5s"
            NMAXimages.style.transition = "1.5s"

            NMAXColor0.style.visibility = "visible"
            NMAXColor1.style.visibility = "hidden"
            NMAXColor2.style.visibility = "hidden"
            NMAXColor3.style.visibility = "hidden"

            color0.style.border = "solid 2px #d60a0a"
            color0.style.marginLeft = "9px"
            color1.style.border = "solid 0px"
            color2.style.border = "solid 0px"
            color3.style.border = "solid 0px"
        }
        function hideOthers5(){
            const color0 = document.querySelector('.BurgmanColor0')
            const color1 = document.querySelector('.BurgmanColor1')
            const color2 = document.querySelector('.BurgmanColor2')
            const BurgmanColor0 = document.querySelector('.burgmanWhite')
            const BurgmanColor1 = document.querySelector('.burgmanblack')
            const BurgmanColor2 = document.querySelector('.burgmanRed')
            const burgmanColors = document.querySelector('.burgmanColors')
            const burgmanImages = document.querySelector('.burgmanImages')
            const burgmanInfo = document.querySelector('.burgmanInfo')
            const BurgmanStreet = document.querySelector('.burgmanDisplay')
            const XMAXdisplay = document.querySelector('.XMAXdisplay')

            burgmanColors.style.zIndex = "-1"

            burgmanColors.style.marginLeft = "-600px"
            burgmanImages.style.marginLeft = "-600px"
            burgmanInfo.style.marginLeft = "2524px"

            BurgmanStreet.style.display = "block"
            XMAXdisplay.style.display = "none"

            burgmanInfo.style.transition = ".5s"
            burgmanImages.style.transition = "1.5s"

            BurgmanColor0.style.visibility = "visible"
            BurgmanColor1.style.visibility = "hidden"
            BurgmanColor2.style.visibility = "hidden"

            color0.style.border = "solid 2px #d60a0a"
            color0.style.marginLeft = "9px"
            color1.style.border = "solid 0px"
            color2.style.border = "solid 0px"
            color3.style.border = "solid 0px"
        }
        function show1(){
            const XMAXdisplay = document.querySelector('.XMAXdisplay')
            const yamahaNmaxdisplay = document.querySelector('.yamahaNmaxdisplay')

            var igbaw = document.querySelector("head");
            igbaw.classList.toggle("slide-up");

            info.style.zIndex = "10"
            motorinfo.style.top = "0"
            footer.style.marginTop = "500px"
            information.style.right = "0"
            motorColor0.style.marginLeft = "-70px"
            motorColor1.style.marginLeft = "-70px"
            motorColor2.style.marginLeft = "-70px"
            motorColor3.style.marginLeft = "-70px"
            Mcolor.style.marginLeft = "0"

            motorinfo.style.transition = ".5s"
            information.style.transition = "1s"
            motorColor0.style.transition = "1s"
            Mcolor.style.transition = "1s"
            footer.style.transition = ".5s"

            yamahaAerox.style.display = "none"
            motor4.style.display = "block"
            XMAXdisplay.style.display = "block"
            yamahaNmaxdisplay.style.display = "none"

            color0.addEventListener('click', ()=>{
                motorColor0.style.visibility = "visible"
                motorColor1.style.visibility = "hidden"
                motorColor2.style.visibility = "hidden"
                motorColor3.style.visibility = "hidden"

                color0.style.border = "solid 2px #d60a0a"
                color0.style.marginLeft = "9px"
                color1.style.border = "solid 0px"
                color2.style.border = "solid 0px"
                color3.style.border = "solid 0px"

            })
            color1.addEventListener('click', ()=>{
                motorColor0.style.visibility = "hidden"
                motorColor1.style.visibility = "visible"
                motorColor2.style.visibility = "hidden"
                motorColor3.style.visibility = "hidden"

                color1.style.border = "solid 2px #d60a0a"
                color1.style.marginLeft = "9px"
                color0.style.border = "solid 0px"
                color2.style.border = "solid 0px"
                color3.style.border = "solid 0px"

                motorColor1.style.marginTop = "25px"
            })
            color2.addEventListener('click', ()=>{
                motorColor0.style.visibility = "hidden"
                motorColor1.style.visibility = "hidden"
                motorColor2.style.visibility = "visible"
                motorColor3.style.visibility = "hidden"

                color2.style.border = "solid 2px #d60a0a"
                color2.style.marginLeft = "9px"
                color0.style.border = "solid 0px"
                color1.style.border = "solid 0px"
                color3.style.border = "solid 0px"

                motorColor2.style.marginTop = "15px"
            })
            color3.addEventListener('click', ()=>{
                motorColor0.style.visibility = "hidden"
                motorColor1.style.visibility = "hidden"
                motorColor2.style.visibility = "hidden"
                motorColor3.style.visibility = "visible"

                color3.style.border = "solid 2px #d60a0a"
                color3.style.marginLeft = "9px"
                color0.style.border = "solid 0px"
                color1.style.border = "solid 0px"
                color2.style.border = "solid 0px"

                motorColor3.style.marginTop = "21px"
            })
        }
        function show2(){
            const color0 = document.querySelector('.mioGearColor0')
            const color1 = document.querySelector('.mioGearColor1')
            const color2 = document.querySelector('.mioGearColor2')
            const color3 = document.querySelector('.mioGearColor3')
            const yamahaMioColor0 = document.querySelector('.mioGearBlack')
            const yamahaMioColor1 = document.querySelector('.mioGearGray')
            const yamahaMioColor2 = document.querySelector('.mioGearMatteBlack')
            const yamahaMioColor3 = document.querySelector('.mioGearMatteBrown')
            const mioGearColors = document.querySelector('.mioGearColors')
            const mioGearImages = document.querySelector('.mioGearImages')
            const mioGEarInfo = document.querySelector('.mioGearInfo')
            const yamahaMioGear = document.querySelector('.yamahaMioGEar')
            const yamahaMioGearClosebar = document.querySelector('.yamahaMioGearClose')
            const XMAXdisplay = document.querySelector('.XMAXdisplay')
            const yamahaNmaxdisplay = document.querySelector('.yamahaNmaxdisplay')

            var igbaw = document.querySelector("head");
            igbaw.classList.toggle("slide-up");
            
            mioGearColors.style.zIndex = "20"
            yamahaMioGearClosebar.style.zIndex = "20"

            motorinfo.style.top = "0"
            footer.style.marginTop = "500px"
            yamahaMioColor0.style.marginLeft = "0px"
            yamahaMioColor1.style.marginLeft = "0px"
            yamahaMioColor2.style.marginLeft = "0px"
            yamahaMioColor3.style.marginLeft = "0px"
            mioGearColors.style.marginLeft = "0px"
            mioGearImages.style.marginLeft = "0px"
            mioGEarInfo.style.marginLeft = "0px"

            yamahaMioGear.style.display = "none"
            motor4.style.display = "block"
            XMAXdisplay.style.display = "block"
            yamahaNmaxdisplay.style.display = "none"


            motorinfo.style.transition = ".5s"
            mioGearColors.style.transition = "1s"
            yamahaMioColor0.style.transition = "1s"
            mioGearImages.style.transition = "1s"
            mioGEarInfo.style.transition = "1s"
            footer.style.transition = ".5s"

            color0.addEventListener('click', ()=>{
                yamahaMioColor0.style.visibility = "visible"
                yamahaMioColor1.style.visibility = "hidden"
                yamahaMioColor2.style.visibility = "hidden"
                yamahaMioColor3.style.visibility = "hidden"

                color0.style.border = "solid 2px #d60a0a"
                color0.style.marginLeft = "9px"
                color1.style.border = "solid 0px"
                color2.style.border = "solid 0px"
                color3.style.border = "solid 0px"

            })
            color1.addEventListener('click', ()=>{
                yamahaMioColor0.style.visibility = "hidden"
                yamahaMioColor1.style.visibility = "hidden"
                yamahaMioColor2.style.visibility = "hidden"
                yamahaMioColor3.style.visibility = "visible"

                color1.style.border = "solid 2px #d60a0a"
                color1.style.marginLeft = "9px"
                color0.style.border = "solid 0px"
                color2.style.border = "solid 0px"
                color3.style.border = "solid 0px"

                yamahaMioColor1.style.marginTop = "-4px"
            })
            color2.addEventListener('click', ()=>{
                yamahaMioColor0.style.visibility = "hidden"
                yamahaMioColor1.style.visibility = "hidden"
                yamahaMioColor2.style.visibility = "visible"
                yamahaMioColor3.style.visibility = "hidden"

                color2.style.border = "solid 2px #d60a0a"
                color2.style.marginLeft = "9px"
                color0.style.border = "solid 0px"
                color1.style.border = "solid 0px"
                color3.style.border = "solid 0px"

                yamahaMioColor2.style.marginTop = "10px"
                yamahaMioColor2.style.marginLeft = "10px"
                yamahaMioColor2.style.width = "430px"
            })
            color3.addEventListener('click', ()=>{
                yamahaMioColor0.style.visibility = "hidden"
                yamahaMioColor1.style.visibility = "visible"
                yamahaMioColor2.style.visibility = "hidden"
                yamahaMioColor3.style.visibility = "hidden"

                color3.style.border = "solid 2px #d60a0a"
                color3.style.marginLeft = "9px"
                color0.style.border = "solid 0px"
                color1.style.border = "solid 0px"
                color2.style.border = "solid 0px"

                yamahaMioColor3.style.marginTop = "0"
                yamahaMioColor3.style.marginLeft = "0"
                yamahaMioColor3.style.width = "450px"
                yamahaMioColor3.style.rotate = "-2deg"
            })
        }
        function show3(){
            const color0 = document.querySelector('.ADVColor0')
            const color1 = document.querySelector('.ADVColor1')
            const color2 = document.querySelector('.ADVColor2')
            const ADVColor0 = document.querySelector('.ADVWhite')
            const ADVColor1 = document.querySelector('.ADVBlack')
            const ADVColor2 = document.querySelector('.ADVRed')
            const hondaADVColors = document.querySelector('.hondaADVColors')
            const ADVImages = document.querySelector('.ADVImages')
            const ADVInfo = document.querySelector('.ADVInfo')
            const HondaADV = document.querySelector('.HondaADV')
            const XMAXdisplay = document.querySelector('.XMAXdisplay')
            const yamahaNmaxdisplay = document.querySelector('.yamahaNmaxdisplay')

            var igbaw = document.querySelector("head");
            igbaw.classList.toggle("slide-up");
            
            hondaADVColors.style.zIndex = "20"

            motorinfo.style.top = "0"
            footer.style.marginTop = "500px"
            ADVColor0.style.marginLeft = "0px"
            ADVColor1.style.marginLeft = "0px"
            ADVColor2.style.marginLeft = "0px"
            hondaADVColors.style.marginLeft = "0px"
            ADVImages.style.marginLeft = "70px"
            ADVInfo.style.marginLeft = "697px"

            HondaADV.style.display = "none"
            motor4.style.display = "block"
            XMAXdisplay.style.display = "block"
            yamahaNmaxdisplay.style.display = "none"


            ADVInfo.style.transition = ".5s"
            motorinfo.style.transition = ".5s"
            hondaADVColors.style.transition = "1s"
            ADVColor0.style.transition = "1.5s"
            ADVImages.style.transition = "1s"
            ADVInfo.style.transition = "1s"
            footer.style.transition = ".5s"

            color0.addEventListener('click', ()=>{
                ADVColor0.style.visibility = "visible"
                ADVColor1.style.visibility = "hidden"
                ADVColor2.style.visibility = "hidden"

                color0.style.border = "solid 2px #d60a0a"
                color0.style.marginLeft = "9px"
                color1.style.border = "solid 0px"
                color2.style.border = "solid 0px"
            })
            color1.addEventListener('click', ()=>{
                ADVColor0.style.visibility = "hidden"
                ADVColor1.style.visibility = "visible"
                ADVColor2.style.visibility = "hidden"

                color1.style.border = "solid 2px #d60a0a"
                color1.style.marginLeft = "9px"
                color0.style.border = "solid 0px"
                color2.style.border = "solid 0px"
                color3.style.border = "solid 0px"

                ADVColor1.style.width = "450px"
                ADVColor1.style.marginLeft = "33px"
                ADVColor1.style.marginTop = "48px"
            })
            color2.addEventListener('click', ()=>{
                ADVColor0.style.visibility = "hidden"
                ADVColor1.style.visibility = "hidden"
                ADVColor2.style.visibility = "visible"

                color2.style.border = "solid 2px #d60a0a"
                color2.style.marginLeft = "9px"
                color0.style.border = "solid 0px"
                color1.style.border = "solid 0px"
                color3.style.border = "solid 0px"

                ADVColor2.style.width = "450px"
                ADVColor2.style.marginLeft = "39px"
                ADVColor2.style.marginTop = "48px"
            })
        }
        function show4(){
            const color0 = document.querySelector('.NMAXcolor0')
            const color1 = document.querySelector('.NMAXcolor1')
            const color2 = document.querySelector('.NMAXcolor2')
            const color3 = document.querySelector('.NMAXcolor3')
            const NMAXColor0 = document.querySelector('.NMAXwhite')
            const NMAXColor1 = document.querySelector('.NMAXblack')
            const NMAXColor2 = document.querySelector('.NMAXgray')
            const NMAXColor3 = document.querySelector('.NMAXmedyoblue')
            const NMAXcolors = document.querySelector('.NMAXcolors')
            const NMAXimages = document.querySelector('.NMAXimages')
            const NMAXinfo = document.querySelector('.NMAXinfo')
            const yamahaNMAX = document.querySelector('.yamahaNmaxdisplay')
            const NMAXclosebar = document.querySelector('.NMAXclosebar')
            const XMAXdisplay = document.querySelector('.XMAXdisplay')

            var igbaw = document.querySelector("head");
            igbaw.classList.toggle("slide-up");
            
            NMAXcolors.style.zIndex = "20"
            NMAXclosebar.style.zIndex = "20"

            motorinfo.style.top = "0"
            footer.style.marginTop = "500px"
            NMAXcolors.style.marginLeft = "0px"
            NMAXimages.style.marginLeft = "435px"
            NMAXinfo.style.marginLeft = "200px"

            yamahaNMAX.style.display = "none"
            XMAXdisplay.style.display = "block"


            motorinfo.style.transition = ".5s"
            NMAXinfo.style.transition = ".5s"
            NMAXcolors.style.transition = "1s"
            NMAXColor0.style.transition = "1s"
            NMAXimages.style.transition = "1s"
            NMAXinfo.style.transition = "1s"
            footer.style.transition = ".2s"

            color0.addEventListener('click', ()=>{
                NMAXColor0.style.visibility = "visible"
                NMAXColor1.style.visibility = "hidden"
                NMAXColor2.style.visibility = "hidden"
                NMAXColor3.style.visibility = "hidden"

                color0.style.border = "solid 2px #d60a0a"
                color0.style.marginLeft = "9px"
                color1.style.border = "solid 0px"
                color2.style.border = "solid 0px"
            })
            color1.addEventListener('click', ()=>{
                NMAXColor0.style.visibility = "hidden"
                NMAXColor1.style.visibility = "visible"
                NMAXColor2.style.visibility = "hidden"
                NMAXColor3.style.visibility = "hidden"

                color1.style.border = "solid 2px #d60a0a"
                color1.style.marginLeft = "9px"
                color0.style.border = "solid 0px"
                color2.style.border = "solid 0px"
                color3.style.border = "solid 0px"
            })
            color2.addEventListener('click', ()=>{
                NMAXColor0.style.visibility = "hidden"
                NMAXColor1.style.visibility = "hidden"
                NMAXColor2.style.visibility = "visible"
                NMAXColor3.style.visibility = "hidden"

                color2.style.border = "solid 2px #d60a0a"
                color2.style.marginLeft = "9px"
                color0.style.border = "solid 0px"
                color1.style.border = "solid 0px"
                color3.style.border = "solid 0px"
            })  
            color3.addEventListener('click', ()=>{
                NMAXColor0.style.visibility = "hidden"
                NMAXColor1.style.visibility = "hidden"
                NMAXColor2.style.visibility = "hidden"
                NMAXColor3.style.visibility = "visible"

                color3.style.border = "solid 2px #d60a0a"
                color3.style.marginLeft = "9px"
                color0.style.border = "solid 0px"
                color1.style.border = "solid 0px"
                color2.style.border = "solid 0px"
            })  
        }
        function show5(){
            const color0 = document.querySelector('.BurgmanColor0')
            const color1 = document.querySelector('.BurgmanColor1')
            const color2 = document.querySelector('.BurgmanColor2')
            const BurgmanColor0 = document.querySelector('.burgmanWhite')
            const BurgmanColor1 = document.querySelector('.burgmanblack')
            const BurgmanColor2 = document.querySelector('.burgmanRed')
            const burgmanColors = document.querySelector('.burgmanColors')
            const burgmanImages = document.querySelector('.burgmanImages')
            const burgmanInfo = document.querySelector('.burgmanInfo')
            const BurgmanStreet = document.querySelector('.burgmanDisplay')
            const XMAXdisplay = document.querySelector('.XMAXdisplay')

            var igbaw = document.querySelector("head");
            igbaw.classList.toggle("slide-up");

            
            burgmanColors.style.zIndex = "20"

            motorinfo.style.top = "0"
            footer.style.marginTop = "500px"
            burgmanColors.style.marginLeft = "0px"
            burgmanImages.style.marginLeft = "435px"
            burgmanInfo.style.marginLeft = "200px"

            BurgmanStreet.style.display = "none"
            XMAXdisplay.style.display = "block"

            motorinfo.style.transition = ".5s"
            burgmanInfo.style.transition = ".5s"
            burgmanColors.style.transition = "1s"
            BurgmanColor0.style.transition = "1s"
            burgmanImages.style.transition = "1s"
            burgmanInfo.style.transition = "1s"
            footer.style.transition = ".2s"

            color0.addEventListener('click', ()=>{
                BurgmanColor0.style.visibility = "visible"
                BurgmanColor1.style.visibility = "hidden"
                BurgmanColor2.style.visibility = "hidden"

                color0.style.border = "solid 2px #d60a0a"
                color0.style.marginLeft = "9px"
                color1.style.border = "solid 0px"
                color2.style.border = "solid 0px"
            })
            color1.addEventListener('click', ()=>{
                BurgmanColor0.style.visibility = "hidden"
                BurgmanColor1.style.visibility = "visible"
                BurgmanColor2.style.visibility = "hidden"

                color1.style.border = "solid 2px #d60a0a"
                color1.style.marginLeft = "9px"
                color0.style.border = "solid 0px"
                color2.style.border = "solid 0px"
            })
            color2.addEventListener('click', ()=>{
                BurgmanColor0.style.visibility = "hidden"
                BurgmanColor1.style.visibility = "hidden"
                BurgmanColor2.style.visibility = "visible"

                color2.style.border = "solid 2px #d60a0a"
                color2.style.marginLeft = "9px"
                color0.style.border = "solid 0px"
                color1.style.border = "solid 0px"
            })  
        }
        setTimeout(function () {
        bouncingDiv.style.display = 'none';
        }, 3000);    
        function paymentMethod(){
            const promptInPaymentMethod = document.querySelector('.promptInPaymentMethod')
            const paymentMethod1 = document.querySelector('.payment111')
            const continue1 = document.querySelector('.continuee')
            const imagesclose = document.querySelector('.promptInPaymentMethod img')
            const cashit = document.querySelector('.cashit');
            const gcash = document.getElementById("gcashPicture");


            if (continue1.innerText == "Continue with..."){

            } else if (continue1.innerText == "Cash on Pick-up") {
                promptInPaymentMethod.style.visibility = "visible";

                imagesclose.addEventListener('click', ()=>{
                    promptInPaymentMethod.style.visibility = "hidden";
                    cashit.style.color = "#000"
                    continue1.innerText = "Continue with..."
                })
            }
        }
        function amend(){
            window.location.href = "yamahaAerox.html";
        }
        function DIP() {
            const driverslicense = document.getElementById('driverslicense')
            const licenseP = document.querySelector('.DIP p')
            const license = document.querySelector('.DIP')
            const upload = document.querySelector('.DIP .upload')

            if (driverslicense.files.length > 0) {
                licenseP.innerText = "File Uploaded";
                licenseP.style.color = "#fff"
                licenseP.style.marginLeft = "-20px"
                licenseP.style.fontStyle = "normal"
                license.style.width = "280px"
                upload.style.marginLeft = "190px"
            }
        }
        function datee(){
            const dateInput = document.getElementById('bdateee');
            const enteredDate = dateInput.value;
            if (enteredDate) {
                dateInput.style.color = "#fff"
                dateInput.style.fontStyle = "normal"
              }
        }


        function newFunction() {
    var motorColor0 = document.getElementById("maincolor")
    var footer = document.getElementById("rent-footer")
    var info = document.getElementById("showinformation")
    var motorinfo = document.getElementById("Rmotor")
    var information = document.getElementById("information")
    var Mcolor = document.getElementById("color")
    var yamahaAerox = document.querySelector('.yamahaAerox')
    var motor4 = document.querySelector('.motor4')
    let logInBtn = document.querySelector('#btnLogIn')
    let registration = document.querySelector('.registeration')
    let motorColor1 = document.querySelector('.Mimage1')
    let motorColor2 = document.querySelector('.Mimage2')
    let motorColor3 = document.querySelector('.Mimage3')
    const color0 = document.getElementById("color0")
    const color1 = document.getElementById("color1")
    const color2 = document.getElementById("color2")
    const color3 = document.getElementById("color3")
    const yamahaerox = document.getElementById("rental-price")
    const add = document.querySelector('.add'), sub = document.querySelector('.subtract'), num = document.querySelector('.motorQuantity')
    const drivercheckbox = document.querySelector('.driverCheckbox')
    const passengerHelmetCheckbox = document.querySelector('.passengerHelmetCheckbox')
    const jacketCheckbox = document.querySelector('.jacketCheckbox')
    const pantsCheckbox = document.querySelector('.pantsCheckbox')
    const glovesCheckbox = document.querySelector('.glovesCheckbox')
    const helmetCheckbox = document.querySelector('.helmetCheckbox')
    const phoneHolderCheckbox = document.querySelector('.phoneHolderCheckbox')
    const bootsCheckbox = document.querySelector('.bootsCheckbox')
    const deliverCheckbox = document.querySelector('.deliverCheckbox')
    const departureDate = document.querySelector('.departure-date input[type="date"]')
    const returningDate = document.querySelector('.returning-date input[type="date"]')
    const rentalDay = document.querySelector('.rental-day')
    let bImage = document.querySelector('#image2')
    let bImage1 = document.querySelector('#image3')
    let btnText = document.querySelector('.text')
    let logInText = document.querySelector('.login')
    let logInText1 = document.querySelector('.textbox')
    let logInProcess = document.querySelector('.logInProcess')
    let logInProcess1 = document.querySelector('.logInProcess1')
    let backBtn = document.querySelector('.backbtn')
    let registerBtn = document.querySelector('.register1')
    let registerTxt = document.querySelector('.register')
    let logInBtn1 = document.querySelector('.lgnin')
    const bouncingDiv = document.querySelector('.notif')
    const bDate1 = document.querySelector('.bDate1')
    return { add, num, yamahaerox, sub, drivercheckbox, passengerHelmetCheckbox, jacketCheckbox, pantsCheckbox, glovesCheckbox, helmetCheckbox, phoneHolderCheckbox, bootsCheckbox, deliverCheckbox, departureDate, returningDate, rentalDay, registration, registerTxt, registerBtn, logInProcess1, bImage1, bImage, logInText, logInBtn, btnText, logInText1, logInProcess, backBtn, logInBtn1, motorinfo, footer, information, motorColor0, Mcolor, motorColor1, motorColor2, motorColor3, yamahaAerox, motor4, color0, color1, color2, color3, info, bouncingDiv, bDate1}
        }