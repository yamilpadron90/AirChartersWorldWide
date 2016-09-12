<?php

    /*
     * Parameters:
     * type: SET, GET, REMOVE & CHECK
     * id: Session's id
     * data: Session's content
     */

    class Session
    {
        var $sessionId, $sessionData;
        
        function __construct()
        {
            session_start();
        }
        
        public function Core($_case, $_sessionId, $_sessionData)
        {
            $this->sessionId = $_sessionId;
            $this->sessionData = $_sessionData;
            switch ($_case)
            {
                case "REMOVE":
                    return $this->Remove();
                case "GET":
                    return $this->Get();
                case "SET":
                    return $this->Set();
                case "CHECK":
                    return $this->Check();
                default:
                    return "Error from Core";
            }
        }      
        
        private function Remove()
        {
            try
            {
                //session_unregister($this->sessionId);
                unset($_SESSION[$this->sessionId]);
                return true;
            } 
            catch (Exception $ex) 
            {
                return false;
            }
        }
        
        private function Check()
        {
            return (isset($_SESSION[$this->sessionId])) ? true : false ;
        }
        
        private function Set()
        {
            try
            {
                $_SESSION[$this->sessionId] = $this->sessionData;
                return true;
            }
            catch (Exception $ex)
            {
                return false;
            }
        }
        
        private function Get()
        {
            return $_SESSION[$this->sessionId];
        }
        
    }
    
    $mySession = new Session();
    //echo "TYPE : " . $_GET["type"] . " ID : " . $_GET["id"] . " DATA : ". $_GET["data"];
    echo $mySession->Core($_GET["type"], $_GET["id"], $_GET["data"]);