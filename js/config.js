//控件list
let list = {};
let inputHtml =
'<div class="layui-form-item"> <label class="layui-form-label">输入框</label> <div class="layui-input-block"> <input type="text" name="z1fwo" required  lay-verify="required" placeholder="请输入输入框内容" autocomplete="off" class="layui-input"> </div> </div>'
let pwdInputHtml =
    '<div class="layui-form-item"> <label class="layui-form-label">密码框</label> <div class="layui-input-block"> <input type="password" name="" required  lay-verify="required" placeholder="请输入密码框内容" autocomplete="off" class="layui-input"> </div> </div>'
let optionHtml =
    '<div class="layui-form-item"> <label class="layui-form-label">选择框</label> <div class="layui-input-block"> <select name="city" lay-verify="required"> <option value=""></option> <option value="0">北京</option> <option value="1">上海</option> <option value="2">广州</option> <option value="3">深圳</option> <option value="4">杭州</option> </select> </div> </div>'
let checkOptionHtml = 
'<div class="layui-form-item"> <label class="layui-form-label">复选框</label> <div class="layui-input-block"> <input type="checkbox" name="gl27[]" title="写作"> <input type="checkbox" name="gl27[]" title="阅读" checked> <input type="checkbox" name="gl27[]" title="发呆"> </div> </div>'
let checkBoxHtml = 
'<div class="layui-form-item"> <label class="layui-form-label">开关</label> <div class="layui-input-block"> <input type="checkbox" name="y96k" lay-skin="switch"><div class="layui-unselect layui-form-switch" lay-skin="_switch"><em></em><i></i></div> </div> </div>'
let radioBoxHtml = 
'<div class="layui-form-item"> <label class="layui-form-label">单选框</label> <div class="layui-input-block"> <input type="radio" name="sqkqxt" value="男" title="男"> <input type="radio" name="sqkqxt" value="女" title="女" checked> </div> </div>'
let textAreaHtml = 
'<div class="layui-form-item layui-form-text"> <label class="layui-form-label">文本域</label> <div class="layui-input-block"> <textarea name="iervi" placeholder="请输入内容" class="layui-textarea"></textarea> </div> </div>'
let submitHtml = 
'<div class="layui-form-item"> <div class="layui-input-block"> <button class="layui-btn" lay-submit lay-filter="formDemo">立即提交</button> <button type="reset" class="layui-btn layui-btn-primary">重置</button> </div> </div>'

list.addInput = inputHtml;
list.addPwdInput = pwdInputHtml;
list.addOption = optionHtml;
list.addCheckOption = checkOptionHtml;
list.addCheckBox = checkBoxHtml;
list.addRadioBox = radioBoxHtml;
list.addTextArea = textAreaHtml;
list.addSubmit = submitHtml;

let plugins = {};
let inputPath = '/plugins/input.html';
let selectPath = '/plugins/select.html'
let radioPath = '/plugins/radio.html';
let checkBoxPath = '/plugins/checkBox.html';
let textAreaPath = '/plugins/textArea.html';
plugins.input = inputPath;
plugins.select = selectPath;
plugins.radio = radioPath;
plugins.checkbox = checkBoxPath;
plugins.textarea = textAreaPath


// 随机生成id
function randomId(length) {
    var result = '';
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * chars.length);
      result += chars.charAt(randomIndex);
    }
    return result;
  }

