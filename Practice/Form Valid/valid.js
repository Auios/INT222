function enableAll
{
    var max = document.checkForm.checkType.length - 2;
    
    if(document.checkForm.checkType[5] == false)
    {
        for(i=0;i<max;i++)
        {
            document.checkForm.checkType[i].checked = true;
        }
        document.checkForm.checkType[document.checkForm.checkType.length - 1].checked = false;
    }
}