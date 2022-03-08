import react from 'react';
import axios from 'axios';

import { useState } from 'react'
import { Flex, Box, Text, Input, Button, Stack, FormControl, FormLabel, FormHelperText, InputLeftElement, Icon, Select, InputLeftAddon, Textarea, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, NumberInput, RadioGroup, HStack, Radio, InputGroup } from "@chakra-ui/react"
import { AiFillInfoCircle, AiFillPhone, AiTwotoneMail } from 'react-icons/ai';

const Form = () => {


// base 64 convertor to images



//property data setter
  const [propertyData, setPropertyData] = useState({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      purpose: "",
      propertyType: "",
      rentAmount: 0,
      rentFrequncy: "",
      propertyValue: 0,
      bedrooms: 0,
      baths: 0,
      sqft: 0,
      email: "",
      description: "",
      photos: [],
  })

//handle submit

///main form

    return (
        <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
            <Box p='10'>
                <Text color='gray.800' fontSize='5xl' fontWeight='medium'>Upload Your Own Property</Text>
                <form action="submit">
                    <Stack spacing={3}>
                        <FormControl isRequired>
                            <FormLabel htmlFor='presonal-info'>Personal Information</FormLabel>
                            <InputGroup>
                                <InputLeftElement 
                                    pointerEvents='none'
                                    children={ <AiFillInfoCircle />}
                                />
                                <Input id='first-name' placeholder='First name' onChange={(e) => { 
                                    setPropertyData({ ...propertyData, firstName: e.target.value.toLowerCase()})
                                }}/>
                            </InputGroup>
                        </FormControl>
                        <FormControl isRequired>
                            <InputGroup>
                                <InputLeftElement 
                                    pointerEvents='none'
                                    children={ <AiFillInfoCircle />}
                                />
                                <Input id='last-name' placeholder='Last Name' onChange={(e) => { 
                                    setPropertyData({ ...propertyData, lastName: e.target.value.toLowerCase()})
                                }}/>
                            </InputGroup>
                        </FormControl>
                        <FormControl isRequired>
                            <InputGroup>
                                <InputLeftElement 
                                    pointerEvents='none'
                                    children={ <AiFillPhone />}
                                />
                                <Input id='phone' placeholder='Phone Number' onChange={(e) => { 
                                    setPropertyData({ ...propertyData, phoneNumber: e.target.value})
                                }}/>
                            </InputGroup>
                        </FormControl>
                        <FormControl isRequired>
                            <InputGroup>
                                <InputLeftElement 
                                    pointerEvents='none'
                                    children={ <AiTwotoneMail />}
                                />
                                <Input id='email' placeholder='Email' onChange={(e) => { 
                                    setPropertyData({ ...propertyData, email: e.target.value})
                                }}/>
                            </InputGroup>
                        </FormControl>
                        <FormControl isRequired>
                                <FormLabel htmlFor='property-adress'>Property Information</FormLabel>
                                <Input id='adress' placeholder='Adress' onChange={(e) => { 
                                    setPropertyData({ ...propertyData, adress: e.target.value})
                                }}/>
                        </FormControl>
                        <FormControl isRequired>
                            <Select id='property-type' placeholder='Property Purpose'  onChange={(e) => { 
                                    setPropertyData({ ...propertyData, purpose: e.target.value})
                                }}>
                                <option>Rental Property</option>
                                <option>Property For Sale</option>                                
                            </Select>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel htmlFor='property-type'>Property Type</FormLabel>
                            <Select id='property-type' placeholder='Select Property Type'  onChange={(e) => { 
                                    setPropertyData({ ...propertyData, propertyType: e.target.value})
                                }}>
                                <option>SFH - single family home</option>
                                <option>Duplex</option>
                                <option>Triplex</option>
                                <option>Complex</option>
                                <option>Small Office</option>
                                <option>Office Building</option>
                                <option>Residential Building</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor='amount'>Rent Amount</FormLabel>
                            <NumberInput max={1000000000} min={10} onChange={(e) => { 
                                    setPropertyData({ ...propertyData, rentAmount: e})
                                }}>
                            <NumberInputField id='amount' />
                            <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                            </NumberInput>
                            <RadioGroup defaultValue='yearly' onChange={(e) => { 
                                    setPropertyData({ ...propertyData, rentFrequncy: e})
                                }}>
                                <HStack spacing='24px'>
                                    <Radio value='daily'>Daily</Radio>
                                    <Radio value='monthly'>Monthly</Radio>
                                    <Radio value='yearly'>Yearly</Radio>
                                </HStack>
                            </RadioGroup>
                            <FormHelperText>Select the rent frequency.</FormHelperText>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel htmlFor='asking-price'> Home Value OR Asking Price</FormLabel>
                            <NumberInput max={1000000000} min={10} onChange={(e) => { 
                                    setPropertyData({ ...propertyData, propertyValue: e})
                                }}>
                            <NumberInputField id='amount' />
                            <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                            </NumberInput>
                        </FormControl>
                         <FormControl isRequired>
                            <FormLabel htmlFor='bathroomnum'>Number Of Bathrooms</FormLabel>
                            <NumberInput max={20} min={1} onChange={(e) => { 
                                    setPropertyData({ ...propertyData, baths: e})
                                }}>
                            <NumberInputField id='amount' />
                            <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                            </NumberInput>
                        </FormControl>
                         <FormControl isRequired>
                            <FormLabel htmlFor='bedroomnum'> Number Of Bedrooms</FormLabel>
                            <NumberInput max={20} min={1} onChange={(e) => { 
                                    setPropertyData({ ...propertyData, bedrooms: e})
                                }}>
                            <NumberInputField id='amount' />
                            <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                            </NumberInput>
                        </FormControl>
                         <FormControl isRequired>
                            <FormLabel htmlFor='sqft'>Sqft</FormLabel>
                            <NumberInput max={20000} min={1} onChange={(e) => { 
                                    setPropertyData({ ...propertyData, sqft: e})
                                }}>
                            <NumberInputField id='amount' />
                            <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                            </NumberInput>
                        </FormControl>                        
                        <FormControl isRequired>
                            <FormLabel htmlFor='description'>Photos</FormLabel>
                            <Input type="file" multiple={true}/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel htmlFor='description'>Description</FormLabel>
                            <Textarea id='description' placeholder='Description' onChange={(e) => {console.log(propertyData)}}/>
                        </FormControl>
                        <Button fontSize='xl' bg="gray.400" color="gray.800">Submit</Button>
                    </Stack>
                </form>
            </Box>
        </Flex> 
     );
}
 
export default Form;