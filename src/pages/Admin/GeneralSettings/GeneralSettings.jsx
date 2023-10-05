//import react packages
import React, { useState } from 'react'

//import mantine packages
import { Card, Group, Input, Radio, Tabs, Textarea } from '@mantine/core'

//import GeneralSettings css
import './GeneralSettings.css'
import ReactQuill from 'react-quill';

const GeneralSettings = () => {

  const [editorShortHtml, setEditorShortHtml] = useState('');
  const [editorShortHtmlContact, setEditorShortHtmlContact] = useState('');

  const handleEditorShortChange = (html) => {
    setEditorShortHtml(html);
  };
  const handleEditorShortChangeContact = (html) => {
    setEditorShortHtmlContact(html);
  };

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      ['link', 'image'],
      [{ 'align': [] }],
      ['blockquote', 'code-block'],
      ['clean'],
    ],
  };

  return (
    <div>
      <div className="general-setting-div">
        <Card className='general-setting-div-card'>
          <Tabs radius="xs" variant="outline" className='general-setting-div-card-tabs' defaultValue="generalsettings">
            <Tabs.List>
              <Tabs.Tab value="generalsettings">General Settings</Tabs.Tab>
              <Tabs.Tab value="contactsettings">Contact Settings</Tabs.Tab>
              <Tabs.Tab value="socialmediasettings">Socail Media Settings</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel className='general-setting-div-card-tabs-individual' value="generalsettings" pt="xs">
              <div className="contact-div-container-content-main-form-individual input-size">
                <Input.Wrapper label="Application Name">
                  <Input placeholder="Application Name" />
                </Input.Wrapper>
              </div>
              <div className="contact-div-container-content-main-form-individual input-size">
                <Input.Wrapper label="Site Title">
                  <Input placeholder="Site Title" />
                </Input.Wrapper>
              </div>
              <div className="contact-div-container-content-main-form-individual input-size">
                <Input.Wrapper label="Homepage Title">
                  <Input placeholder="Homepage Title" />
                </Input.Wrapper>
              </div>
              <div className="contact-div-container-content-main-form-individual input-size">
                <Input.Wrapper label="Site Description">
                  <Input placeholder="Site Description" />
                </Input.Wrapper>
              </div>
              <div className="contact-div-container-content-main-form-individual input-size">
                <Input.Wrapper label="Keywords">
                  <Input placeholder="Keywords" />
                </Input.Wrapper>
              </div>
              <div className="contact-div-container-content-main-form-individual input-size">
                <Input.Wrapper label="Copyright">
                  <Input placeholder="Copyright" />
                </Input.Wrapper>
              </div>
              <div className="contact-div-container-content-main-form-individual input-size">
                <label>Footer About Section</label>
                <ReactQuill
                  className='quill-style'
                  value={editorShortHtml}
                  onChange={handleEditorShortChange}
                  modules={modules}
                />
              </div>
              <div className="general-setting-div-card-tabs-individual-button">
                <button>Save Changes</button>
              </div>
            </Tabs.Panel>

            <Tabs.Panel className='general-setting-div-card-tabs-individual' value="contactsettings" pt="xs">
              <div className="contact-div-container-content-main-form-individual input-size">
                <Input.Wrapper label="Address">
                  <Input placeholder="Address" />
                </Input.Wrapper>
              </div>
              <div className="contact-div-container-content-main-form-individual input-size">
                <Input.Wrapper label="Email Address">
                  <Input placeholder="Email Address" />
                </Input.Wrapper>
              </div>
              <div className="contact-div-container-content-main-form-individual input-size">
                <Input.Wrapper label="Phone">
                  <Input placeholder="Phone" />
                </Input.Wrapper>
              </div>
              <div className="contact-div-container-content-main-form-individual input-size">
                <label>Contact Text</label>
                <ReactQuill
                  className='quill-style'
                  value={editorShortHtmlContact}
                  onChange={handleEditorShortChangeContact}
                  modules={modules}
                />
              </div>
              <div className="general-setting-div-card-tabs-individual-button">
                <button>Save Changes</button>
              </div>
            </Tabs.Panel>

            <Tabs.Panel className='general-setting-div-card-tabs-individual' value="socialmediasettings" pt="xs">
              <div className="contact-div-container-content-main-form-individual input-size">
                <Input.Wrapper label="Facebook URL">
                  <Input placeholder="Facebook URL" />
                </Input.Wrapper>
              </div>
              <div className="contact-div-container-content-main-form-individual input-size">
                <Input.Wrapper label="Instagram URL">
                  <Input placeholder="Instagram URL" />
                </Input.Wrapper>
              </div>
              <div className="general-setting-div-card-tabs-individual-button">
                <button>Save Changes</button>
              </div>
            </Tabs.Panel>
          </Tabs>
        </Card>
        <Card className='general-setting-div-card-maintance'>
          <div className="general-setting-div-card-maintance-heading">
            <h4>Maintenance Mode</h4>
          </div>
          <div className="general-setting-div-card-maintance-content">
            <div className="contact-div-container-content-main-form-individual input-size">
              <Input.Wrapper label="Title">
                <Input placeholder="Title" />
              </Input.Wrapper>
            </div>
            <div className="contact-div-container-content-main-form-individual input-size">
              <Textarea
                label="Description"
                radius="xs"
                size="xs"
                autosize
                minRows={4}
              />
            </div>
            <div className="contact-div-container-content-main-form-individual input-size">
              <Radio.Group
                name="favoriteFramework"
                label="Status"
              >
                <Group mt="xs">
                  <Radio value="Enable" label="Enable" />
                  <Radio value="Disable" label="Disable" />
                </Group>
              </Radio.Group>
            </div>
            <div className="general-setting-div-card-tabs-individual-button">
              <button>Save Changes</button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default GeneralSettings