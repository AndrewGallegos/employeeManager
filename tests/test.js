var page
module.exports = {
    before: browser => {
        page = browser.page.employeeManager()
        page.navigate()
    },
    after: function () {
        //teardown, delete new employee assuming it is selected
        page
            .click('@deleteBtn')
            .pause(500)
            .api.acceptAlert()
        page.pause(500)
        page.end()
    },
    'Add employee button works': function() {
        var previousName
        page
            .getAttribute('@lastEmployee', 'name', function(result){
                previousName = result.value
            })
        page
            .click('@addEmployee')
            .pause(500)
            .expect.element('@lastEmployee').to.have.attribute('name').which.does.not.equals(previousName)
        // page
        //     .verify.attributeEquals('@lastEmployee', 'name', previousName)
    },
    'New employee is accessible': function() {
        var defaultInfo = {
            name:'New Employee',
            phone: '1111111111',
            email: 'abc',
            title: 'New Employee'
        }
        page
            .click('@lastEmployee')
            .verify.value('@nameEntry', defaultInfo.name)
            .verify.value('@phoneEntry', defaultInfo.phone)
            .verify.value('@emailEntry', defaultInfo.email)
            .verify.value('@titleEntry', defaultInfo.title)
    },
    'Changes can be saved to new employee': function() {
        var input = {
            name:'Fungus Amungus',
            phone:'7799662211',
            email:'yuck@yuck.org',
            title:'Big Yuck'
        }
        page
            .clearSet('@nameEntry', input.name)
            .clearSet('@phoneEntry', input.phone)
            .clearSet('@emailEntry', input.email)
            .clearSet('@titleEntry', input.title)
            .click('@saveBtn')
            .click('@firstEmployee')
            .click('@lastEmployee')
            .verify.value('@nameEntry', input.name)
            .verify.value('@phoneEntry', input.phone)
            .verify.value('@emailEntry', input.email)
            .verify.value('@titleEntry', input.title)
    }
}