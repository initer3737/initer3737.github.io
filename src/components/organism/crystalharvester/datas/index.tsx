
   type TData={
          appName:string,
          playerName:string | null,
          playerPassword:string | null,
          playerScore:string | null,
        }
export const data:TData={
    appName:'crystal harvester',
    playerName:localStorage.getItem('username'),
    playerPassword:localStorage.getItem('password'),
    playerScore:localStorage.getItem('scorePlayer'),
}