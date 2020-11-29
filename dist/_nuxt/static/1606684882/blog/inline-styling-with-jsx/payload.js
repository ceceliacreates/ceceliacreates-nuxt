__NUXT_JSONP__("/blog/inline-styling-with-jsx", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K){return {data:[{article:{title:"Inline Styling with JSX",description:"How to properly format inline styling with JSX and React",img:"https:\u002F\u002Fsource.unsplash.com\u002Fc8h0n7fSTqs\u002F",alt:"blog post image alt text",tags:["react","css","front-end"],toc:[],body:{type:"root",children:[{type:b,tag:i,props:{},children:[{type:a,value:"If you are new to React, you have likely already encountered JSX, a syntax extension for Javascript used by the framework. It very closely resembles HTML, allowing for an easy transition if you’re already using HTML, CSS, and Javascript to create web applications. Just like HTML, JSX allows for inline styling. I’m not here to make an argument for or against inline styling versus external or internal style sheets, but if you do need to use inline style for a JSX element, there are some things to keep in mind to make sure your components render as expected."}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"Here is an example of a JSX expression being rendered by a simple function component:"}]},{type:a,value:e},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:w,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:A}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,k,E]},children:[{type:a,value:F}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:n}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:G}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:J}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"The JSX expression is after the return keyword, including the h1 tags. If you think this looks identical to HTML -- you'd be right! There are some differences between HTML and JSX, but for the most part if you're comfortable with HTML, you'll be in good hands."}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"Let's say you'd like to style this component, and for reasons unexplained here you want to use inline styling. Below is the syntax to style this h1 with font size of 16px and a color of red."}]},{type:a,value:e},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:w,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:A}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,k,E]},children:[{type:a,value:F}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:n}]},{type:a,value:"h1 style"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"="}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:" color"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:K}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"\"red\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:","}]},{type:a,value:" fontSize"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:K}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"\"16px\""}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:G}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:J}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"A few things you've probably noticed:"}]},{type:a,value:e},{type:b,tag:"ul",props:{},children:[{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"The value of the style attribute is wrapped in a set of curly braces {}. This is how you pass a Javascript expression in JSX."}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"There is a second set of curly braces inside, indicating the object containing the CSS properties and values."}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"The CSS property font-size is typed as fontSize. Hyphens don't play nice with JSX, so any CSS property with a hyphen must be converted to camelCase to work."}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"The property values are wrapped in quotes. While this isn't necessarily required in a CSS stylesheet, we do need to pass the values as strings in most cases. If you are passing a numeric value, such as for width or margin, it will default to pixels, so if you DON'T want that, you'll need to pass a string like \"40%\"."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"As long as you keep those things in mind, you shouldn't have any issues styling your components in JSX!"}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"If you do decide to use an external style sheet instead, webpack within React allows you to import your stylesheet directly in your .js file where your components are defined!"}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"Like this:"}]},{type:a,value:e},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:w,props:{},children:[{type:b,tag:c,props:{className:[d,k,"module"]},children:[{type:a,value:"import"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"\"..\u002Fstyles\u002Fstyle.css\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"Please let me know if you have any questions or corrections, and thanks for reading!"}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Finline-styling-with-jsx",extension:".md",slug:"inline-styling-with-jsx",createdAt:"2020-11-22T04:28:00.561Z",updatedAt:"2020-11-22T04:29:19.695Z"}}],fetch:[],mutations:void 0}}("text","element","span","token","\n","punctuation","operator"," ","p","maybe-class-name","keyword","function","{","\u003C","\u003E","}","li","div","nuxt-content-highlight","pre","language-javascript","line-numbers","code","h1",";","string","HelloHeader","(",")","\n  ","control-flow","return","Hello","World","!","\u002F",":")));