exports.newfile= class{
    constructor(page){
        this.page=page;
        this.submitbtn= "#id";
    }

    async click_on_submit(){

        await this.page.locator(this.submitbtn).click();

        

    }
}