/**
 * JS for blog post section exercise
 */

"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * sets up necessary functionality when page loads
   */
  function init() {
    qs("button").addEventListener("click", addEntry);
  }

  /**
   * TODO
   * adds a blog entry to the blog post page
   */
  
  //
function addEntry() {
    let date = id("date").value;
    let entry = id("entry").value;
    let container = document.createElement("article");
    container.classList.add("post");
    let header = document.createElement("h3");
    let contents = document.createElement("p");
    header.textContent = "Date: " + date;
    contents.textContent = "Entry: " + entry;
    container.appendChild(header);
    container.appendChild(contents);
    id("posts").appendChild(container);
    container.addEventListener("dblclick", removePost);
    id("date").value = "";
    id("entry").value = "";
    checkNumPosts();
  }

  function checkNumPosts() {
    let posts = qsa(".post");
    let numPosts = posts.length;
    let addEntryBtn = qs("button");
    if (numPosts === 3) {
      addEntryBtn.disabled = true;
    } else {
      addEntryBtn.disabled = false;
    }
  }

  /**
   * removes the selected blog post
   */
  function removePost() {
    this.parentNode.removeChild(this);
    checkNumPosts();
  }






  
  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} name - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }
  
  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }



  

  //
  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} query - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
   function qsa(query) {
    return document.querySelectorAll(query);
  }




  
})();