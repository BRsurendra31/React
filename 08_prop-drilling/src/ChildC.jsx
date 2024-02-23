import React from 'react'

export default function ChildC({name}) {
  return (
    <div>
    {name}
    </div>
  )
}

/* 
    <App>
        <A>
            <B>
                <c>

Above are nested parent child relationship where parent of A is App , Parent of B is A Sso on..
suppose child C need some data from App, in this case we have to transfer data (props) from App to A , then A to B , then B to Child C like pros ko props
as we can in above

but there is no use of that data to A and B still we handle that data in both
this is an old and unoptimized approach
this is called  props drilling 

To avoid it - Context API concept (useContext hook) is used 
*/