import React , { useState } from "react"
import { Modal, Button, Input, Center, NativeBaseProvider } from "native-base"



export default function ModalCreateComments() {
  
  
  const [modalVisible, setModalVisible] = useState(false)
  const [comments, setComments] = useState('')
  const initialRef = useState(null)
  const finalRef = useState(null)
  
     
  function handleSubmit() {
    
    console.log({ comments })
}
  
  return (

    <NativeBaseProvider>
    <Center flex={1}>
      <Modal
        isOpen={modalVisible}
        onClose={setModalVisible}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Did you find a pet?</Modal.Header>
          <Modal.Body>
            Help some pet to meet again their family!!!
            <Input
              mt={4}
              ref={initialRef}
              placeholder="Please write here"
            />
            
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button>SAVE</Button>
              <Button
                onPress={() => {
                  setModalVisible(!modalVisible)
                }}
                colorScheme="secondary"
              >
                CLOSE
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Button
        onPress={() => {
          setModalVisible(!modalVisible)
        }}
      >
       Add Comment
      </Button>
       </Center>
      </NativeBaseProvider>

  )
}