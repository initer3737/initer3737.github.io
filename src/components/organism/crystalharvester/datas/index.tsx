
   type TData={
          appName:string,
          playerName:string | null,
          playerScore:string | null,
        }
export const data:TData={
    appName:'crystal harvester',
    playerName:localStorage.getItem('username'),
    playerScore:localStorage.getItem('scorePlayer'),
}