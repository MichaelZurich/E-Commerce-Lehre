import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatToolbar} from "@angular/material/toolbar";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuItem,
    MatToolbar,
    RouterLink,
    MatMenuTrigger,
    MatMenu
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuItem,
    MatToolbar,
    RouterLink,
    MatMenuTrigger,
    MatMenu
  ]
})
export class SharedModule { }
