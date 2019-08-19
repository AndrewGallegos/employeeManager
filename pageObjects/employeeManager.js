var editPageSelectors = ['@nameEntry', '@phoneEntry', '@emailEntry', '@titleEntry']
var commands = {
    clearSet: function (selector, text) {
        this.clearValue(selector)
        this.setValue(selector, text)

        return this
    },
    // clearSetEmployee: function (info) {
    //     Object.keys(info).forEach(function (value, index) {
    //         commands.clearSet(editPageSelectors[index], info[value])
    //     })

    //     return this
    // },
    // verifyEmployee: function (info) {
    //     Object.keys(info).forEach(function (value, index) {
    //         this.verify.containsText(editPageSelectors[index], info[value])
    //     })
    // }
}
module.exports = {
    commands: [commands],
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    elements: {
        lastEmployee: {
            selector: '//li[last()-1]',
            locateStrategy: 'xpath'
        },
        firstEmployee: {
            selector: '//li[2]',
            locateStrategy: 'xpath'
        },
        saveBtn: 'button.confirmationButton',
        deleteBtn: 'button[name=delete]',
        nameEntry: 'input[name=nameEntry]',
        phoneEntry: 'input[name=phoneEntry]',
        emailEntry: 'input[name=emailEntry]',
        titleEntry: 'input[name=titleEntry]',
        addEmployee: 'li[name=addEmployee]'
    }
}