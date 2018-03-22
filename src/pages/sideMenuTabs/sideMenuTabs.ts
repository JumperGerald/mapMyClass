import { Component } from '@angular/core';

import { ListPage } from '../list/list';

@Component({
    templateUrl: 'sideMenuTabs.html'
})
export class sideMenuTabsPage {

    tab1Root = ListPage;

    constructor(){
    
    }
}