import { Injectable } from '@angular/core';
import { Nav } from 'ionic-angular';
import { _DetailPage } from '../pages/_DetailPage';
import {isUndefined} from "ionic-angular/util/util";

@Injectable()
export class MultiViewControlService {

  _masterNav: Nav = null;
  get masterNav(): Nav {
    return this._masterNav;
  }
  set masterNav(value: Nav) {
    this._masterNav = value;
  }

  _detailNav: Nav = null;
  get detailNav(): Nav {
    return this._detailNav;
  }
  set detailNav(value: Nav) {
    this._detailNav = value;
  }

  _isOn: boolean = false;
  get isOn(): boolean {
    return this._isOn;
  }
  set isOn(value: boolean) {
    this._isOn = value;
  }

  pushDetail(page: any, params: any) {
    if (this.isOn) {
      this.detailNav.setRoot(page, params);
    } else {
      this.masterNav.push(page, params);
    }
  }

  pushMaster(page: any, params: any) {
    this.masterNav.push(page, params);
  }

  onSplitPaneChanged(isOn) {
    // set local 'isOn' flag...
    this.isOn = isOn;
    // if the nav controllers have been instantiated...
    if (this.masterNav && this.detailNav) {
      (isOn) ? this.activateSplitView() :
        this.deactivateSplitView();
    }
  }

  activateSplitView() {
    let currentView = this.masterNav.getActive();
    if(currentView != null) {
      if (currentView.component.prototype instanceof _DetailPage) {
        // if the current view is a 'Detail' page...
        // - remove it from the 'master' nav stack...
        this.masterNav.pop();
        // - and add it to the 'detail' nav stack...
        this.detailNav.setRoot(currentView.component, currentView.data);
      }
    }
  }

  deactivateSplitView() {
    let detailView = this.detailNav.getActive();
    let masterView = this.masterNav.getActive();
    if (isUndefined(detailView.data.paramsData) || detailView.data.paramsData == null){
      let index = this.masterNav.getViews().length;
      this.masterNav.setRoot(masterView.component, masterView.data);
    }else {
      this.detailNav.setRoot('ListProductsPage');
      if (detailView.component.prototype instanceof _DetailPage) {
        // if the current detail view is a 'Detail' page...
        let index = this.masterNav.getViews().length;
        // add it to the master view...
        this.masterNav.insert(index, detailView.component, detailView.data);
      }
    }
  }
}
