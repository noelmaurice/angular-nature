export class User {
	
    readonly id: number; // id de l’utilisateur
    name: string; // nom de l’utilisateur
    email: string; // email de l’utilisateur
    password: string; // mot de passe de l'utilisateur
  
    constructor(options: {
     id?: number,
     name?: string,
     email?: string,
     password?: string,
    } = {}) {
     this.id = options.id || null;
     this.name= options.name || '';
     this.email = options.email || '';
	 this.password = options.password || '';
    }
   }
