import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
 const styleElement = document.createElement('dom-module');
styleElement.innerHTML = 
  `<template>
    <style>
        :root{
          --color-primary:#c62828;
          --color-primary-light:#ff5f52;
          --color-primary-dark:#8e0000;
          --color-text-primary:#ffffff;
          --color-text-secondary:#000000;
        }

        :host{
          color: var(--color-text-primary, #ffffff);
        }

    </style>
  </template>`;
styleElement.register('style-element');