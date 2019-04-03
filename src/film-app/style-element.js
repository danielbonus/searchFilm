import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
 const styleElement = document.createElement('dom-module');
styleElement.innerHTML = 
  `<template>
    <style>
        :root{
          --color-primary:#D4002E;
          --color-primary-light:#FD0738;
          --color-primary-dark:#CF022B;
          --color-text-primary:#ffffff;
          --color-text-secondary:#000000;
          --color-btn-primary: var(--color-primary-dark,#D4002E);  
        }

        :host{
          color: var(--color-text-primary, #ffffff);
        }

    </style>
  </template>`;
styleElement.register('style-element');