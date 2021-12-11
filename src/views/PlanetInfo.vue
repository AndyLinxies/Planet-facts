<template>
    <div class="text mt-2">
        <p class=" text-white">{{textDetail.content}}</p>
    </div>
</template>
<script>

export default {
    name: 'PlanetInfo',
    props:{
        slug2: String,
        detailArr: Array
        },
    computed: {
        //on fait une petite boucle sur l'Array recu en props et on compare le name à ce qu'on a recu au niveau du Slug2
        textDetail(){
            return this.detailArr.find(elem=>elem.name==this.slug2)
        }
    },
   
}
</script>
<style>
    
</style>