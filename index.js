function getInputData(){
    //テキストボックス要素取得
    const textbox = document.getElementById("inputData");
    //出力先要素取得
    const result = document.getElementById("result")
    //入力値要素取得
    const inputData = textbox.value;
    //配列を変数に変換
    const changedData = getElement(inputData);
    if(changedData === null){
        result.innerText = "計算式が不正です";
        return;
    }
    //計算結果取得
    const calculationResult = calculation(changedData);
    //計算結果をhtmlに挿入
    result.innerText = calculationResult;

    function getElement(data){
        data = inputData.split(' ');
        let arrayoperator = ["+","-","/","*"];
        if(data.length !== 3){
            return null;
        }
         const num1 = parseInt(data[0]);
         const operator = data[1];
         const num2 = parseInt(data[2]);

         if(!isNaN(num1) && !isNaN(num2)){
            if(arrayoperator.includes(operator)){
                return{operator,num1,num2};
            }
        }
        return null;
    }

    function calculation (calculationResult){
        switch(changedData.operator){
            case "+":
                calculationResult = changedData.num1 + changedData.num2;
                return calculationResult;
            case "-":
                calculationResult = changedData.num1 - changedData.num2;
                return calculationResult;
            case "*":
                calculationResult = changedData.num1 * changedData.num2;
                return calculationResult;
            case "/":
                calculationResult = changedData.num1 / changedData.num2;
                return calculationResult;
            
            default:
                return calculationResult = "計算式が不正です";
        }
    }
}
