var RefresMeunBarCommand = function (receiver) {
    return {
        execute:function() {
            receiver.refresh();
        }
    }
}

var setCommand = function(button, command) {
    button.onclick = function() {
        command.execute();
    }
}

var refreshMenuBarCommand = RefresMeunBarCommand(Menubar)
setCommand( button1, refreshMenuBarCommand );


// 组合模式

var MacroCommand = function() {
    return {
        commandsList: [],
        add: function(command) {
            this.commandsList.push(command);
        },
        execute: function() {
            for (var i = 0, command ; command = this.commandsList[i++];) {
                command.execute()
            }
        }
    }
}

var openAcCommand = {
    execute: function() {
        console.log('打开空调')
    }
}
var MacroCommand1 =MacroCommand();
MacroCommand1.add(openAcCommand)