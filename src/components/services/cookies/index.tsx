import Cookies from 'js-cookie'
//kuki habis then token set to false
const useKuki=()=>{
  const returnkuki=  Cookies.set('useGameKuki', 'active', {
     expires: 1 , secure:true
     })
    // Cookies.get('name') // => 'value'
    // Cookies.remove('name')
        return returnkuki
}
  export default function Kuki__initialize(){
       return useKuki()
  }
