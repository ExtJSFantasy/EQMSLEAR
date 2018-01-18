//下拉选择 data: 对象数组数据     objId： 下拉对象
function selectPicker(data, objId, layer, arr, callback){
	var picker = new mui.PopPicker({
		layer: layer
	});
	picker.setData(data);
	
	if(arr.length>0){
        if(picker.pickers && picker.pickers.length>0){
            for(var i=0; i<picker.pickers.length; i++){
                if(arr[i]){
                    picker.pickers[i].setSelectedValue(arr[i]);
                }
            }
        }
   	}

	var objIdR = document.getElementById(objId);
	objIdR.addEventListener('tap', function(event) {
		picker.show(function(items) {
			callback(items);
		});
	}, false);
}

//日期选择
function selectDate(type, objId, value, callback){
	var _obj = document.getElementById(objId);
	_obj.addEventListener('tap', function() {
		/*
		 * 首次显示时实例化组件
		 * 示例为了简洁，将 options 放在了按钮的 dom 上
		 * 也可以直接通过代码声明 optinos 用于实例化 DtPicker
		 */
		var picker = new mui.DtPicker({
			type: type,
			beginDate: new Date(1950, 01, 01),//设置开始日期
    		endDate: new Date(2020, 12, 31),//设置结束日期
    	});
		if(value != ""){ 
			picker.setSelectedValue(value)
		}
		picker.show(function(rs) {
			callback(rs)
			picker.dispose();
		});
	}, false);
}