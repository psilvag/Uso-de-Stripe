
import Stripe from 'stripe'
import { STRIPE_PRIVATE_KEY } from '../config.js'

const stripe=new Stripe(STRIPE_PRIVATE_KEY)

export const createSession= async (req,res)=>{
    const session = await stripe.checkout.sessions.create({
        line_items:[
            {
                price_data:{
                    product_data:{
                        name:'Pc gamer',
                        description:'Gaming laptop'
                    },
                    currency:'usd',
                    unit_amount:40000
                },
                quantity:1
            },

          {
            price_data:{
                product_data:{
                    name:'Cellphone Samsung',
                    description:'Cell Samsumg S13'
                },
                currency:'usd',
                unit_amount:30000

            },
            quantity:1
          }
        ],
        mode:'payment',
        success_url:'http://localhost:3000/success',
        cancel_url:'http://localhost:3000/cancel'
    })
    
    return res.json(session)
}