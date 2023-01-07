
        type Lycoris={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            msg:string,
            link:string,
            tampil:boolean
        }

        type Kimetsu={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            msg:string,
            link:string,
            tampil:boolean
        }

        type Chainsaw={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            msg:string,
            tampil:boolean
        }

        type Thensura={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            msg:string,
            tampil:boolean
        }

        type Crow={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            msg:string,
            tampil:boolean
        }

        type Crow2={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            msg:string,
            tampil:boolean
        }

        type SamuraiX={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            msg:string,
            link:string,
            tampil:boolean
        }

        type Ninja={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            msg:string,
            tampil:boolean
        }

        type GirlFrontline={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            msg:string,
            link:string,
            tampil:boolean
        }

        type kage={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            msg:string,
            tampil:boolean
        }
        type Machiavellianism={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            msg:string,
            link:string,
            tampil:boolean
        }
        type Blueperiod={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            msg:string,
            link:string,
            tampil:boolean
        }
        type TanakaKun={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            msg:string,
            link:string,
            tampil:boolean
        }
        type Sakamoto={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            msg:string,
            link?:string,
            tampil:boolean
        }

 interface animeType{
                lycoris:Lycoris,
                kimetsu:Kimetsu,
                chainsaw:Chainsaw,
                crow:Crow,
                crow2:Crow2,
                tenshura:Thensura,
                samuraiX:SamuraiX,
                ninja?:Ninja,
                girlFrontline:GirlFrontline,
                kage?:kage,
                machiavellianism?:Machiavellianism,
                blueperiod:Blueperiod,
                tanakaKun:TanakaKun,
                sakamoto:Sakamoto,
            }

export type {animeType}