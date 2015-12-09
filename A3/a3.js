function addCountries()
{
    var txt;
    var i = 0;

    for(i=0;i<countries.length;i++)
    {
        if(countries[i].name == "Canada")
            {txt+='<option value="' + countries[i].code + '" selected>' + countries[i].name + '</option>';}
        else
            {txt+='<option value="' + countries[i].code + '">' + countries[i].name + '</option>';}
    }
    document.write(txt);
}

function addProv()
{
    var txt
    var i = 0;

    txt+='<option value="NA" selected>-Select-</option>';

    for(i=0;i<prov.length;i++)
        {txt+='<option value="' + prov[i].code + '">' + prov[i].name + '</option>';}

    document.write(txt);
}



function validForm(thisForm)
{
    var email = thisForm.email;
    var pass = thisForm.pass;
    var repass = thisForm.repass;
    var country = thisForm.country;
    var firstName = thisForm.firstName;
    var lastName = thisForm.lastName;
    var jobTitle = thisForm.jobTitle;
    var phoneNumber = thisForm.phoneNumber;
    var company = thisForm.company;
    var address = thisForm.address;
    var address2 = thisForm.address2;
    var city = thisForm.city;
    var prov = thisForm.prov;
    var zip = thisForm.zip;
    var how = thisForm.how;
    var newsFeed = thisForm.newsFeed;

    var pattPassLo = new RegExp("[a-z]");
    var pattPassHi = new RegExp("[A-Z]");
    var pattName = new RegExp("^[A-Za-z\'\-]+$");

    //Password
        if(pass.value != repass.value)
        {
            alert("Passwords do not match!");
            pass.value = "";
            repass.value = "";
            pass.focus();

            return false;
        }

        if(pass.value.length < 8)
        {
            alert("Password must be at least 8 characters long!");
            pass.focus();

            return false;
        }

        if(!pattPassLo.test(pass.value))
        {
            alert("Password must contain at least one lowercase letter!");
            pass.focus();

            return false;
        }

        if(!pattPassHi.test(pass.value))
        {
            alert("Password must contain at least one uppercase letter!");
            pass.focus();

            return false;
        }

    //First and last name
        if(!pattName.test(firstName.value))
        {
            alert("First name cannot contain any special characters!");
            firstName.focus();

            return false;
        }

        if(!pattName.test(lastName.value))
        {
            alert("Last name cannot contain any special characters!");
            lastName.focus();

            return false;
        }

    //Phone number (Super inefficient method)
        if(phoneNumber.value.substr(0,1) != "(" || phoneNumber.value.substr(4,1) != ")" || phoneNumber.value.substr(8,1) != "-")
        {
            alert("Phone number does not match format! '(999)999-9999'");
            phoneNumber.focus();
            return false;
        }

        if(phoneNumber.value.substr(1,3) == "000")
        {
            alert("Phone number area code cannot be all 0's!");
            phoneNumber.focus();
            return false;
        }

        if(phoneNumber.value.substr(5,3) == "000")
        {
            alert("Phone number cannot be all 0's!");
            phoneNumber.focus();
            return false;
        }

        if(phoneNumber.value.substr(9,4) == "0000")
        {
            alert("Phone number cannot be all 0's!");
            phoneNumber.focus();
            return false;
        }

    //Province
        if(prov.value == "NA")
        {
            alert("Please select a province!");
            prov.focus();

            return false;
        }

    return true;
}

/*
Funny window experiment

    var x = 0;
    var y = 0;

    winRef = window.open('','winName','width=200,height=200,scrollbars=no');

    do
    {
        do
        {
            x++;
            y++;
            winRef.moveTo(x,y);
        }while(x<1000);

        do
        {
            x++;
            y--;
            winRef.moveTo(x,y);
        }while(x<2000);

        do
        {
            x--;
            y--;
            winRef.moveTo(x,y);
        }while(x>=1000);

        do
        {
            x--;
            y++;
            winRef.moveTo(x,y);
        }while(x>=2);
    }while(true);

    winRef.close();
*/
