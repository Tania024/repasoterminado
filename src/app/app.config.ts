import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"respaso-ea6e6","appId":"1:6771018757:web:336f8a7f0f9a851d0c606c","storageBucket":"respaso-ea6e6.appspot.com","apiKey":"AIzaSyAuWaVb8M_46TyOIvTsCLaU5nzCcfM5qTQ","authDomain":"respaso-ea6e6.firebaseapp.com","messagingSenderId":"6771018757"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"respaso-ea6e6","appId":"1:6771018757:web:336f8a7f0f9a851d0c606c","storageBucket":"respaso-ea6e6.appspot.com","apiKey":"AIzaSyAuWaVb8M_46TyOIvTsCLaU5nzCcfM5qTQ","authDomain":"respaso-ea6e6.firebaseapp.com","messagingSenderId":"6771018757"})), provideFirestore(() => getFirestore())]
};
