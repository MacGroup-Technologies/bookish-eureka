<script setup>
  import AiIcon from "@/components/icons/aiIcon.vue";
  import SendIcon from "@/components/icons/sendIcon.vue"
  
</script>

<template>
    <main class="md:px-20 md:py-10">
    <section>
        <div class="container px-5 py-5 bg-white border-[1.5px] rounded-lg">
            <h2 class="md:text-3xl text-2xl text-center font-bold">Get answers to your immigration questions</h2>
            <!----------------dummy chats ------------->
            <div class="px-10 py-10 flex items-start justify-start gap-3">
             <AiIcon class="md:w-7 w-20 h-auto"/>   
             <div class="border-[1.5px] rounded-lg p-2">
                <p class="text-sm">Hello, I’m your AI assistance, <br> I'm programmed to help you with questions regarding immigration. What would you like to ask me?</p>
             </div>
            </div>
            <!-------dummy chats 2 ------>
            <div class="flex justify-end px-10">
                <div class="border-[1.5px] rounded-lg p-2 min-w-fit max-w-2/3 text-sm">
                    Tell me about I-90 Green Card Renewal / Replaceme
                </div>
            </div>
         <!------------------dummy chat 3  -------------------->
         <div class="px-10 py-10 flex justify-start gap-3 items-start">
             <AiIcon class="md:w-7 w-20 h-auto"/>   
             <div class="border-[1.5px] rounded-lg p-2">
                <p class="text-sm">The Form I-90 
                    <span class="text-primary-light">(Click here for Form I-90)</span> is used to renew or replace a Green Card <span class="text-primary-light">(Click to Apply for Family <br> Based Green Card and see if you Qualify).</span>
                     You can file it online through the USCIS website or by mail. Make sure <br> to submit the form before your current Green Card expires. For detailed guidance and assistance, you can visit <br> the Immigration Direct website.</p>
             </div>
            </div>

    <!---------------------------------form--------------------------------->
    <form action="" class="w-full flex gap-3 pl-10 py-5">
        <input type="text" placeholder="Type your message" class="border-[1.5px] w-[85%] rounded-lg p-3">
        <button class="bg-primary-light text-white flex items-center rounded-md px-1 pr-4">
            <span class="p-1">
                <SendIcon class="w-6" />
            </span>
            Send
        </button>
    </form>
            
        </div>
    </section>
   </main>
</template>